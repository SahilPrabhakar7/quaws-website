import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { LocalStorageHandler } from './localStorageHandler';
import { ToastrService } from 'ngx-toastr';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private localStorage: LocalStorageHandler,
        private toastr: ToastrService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = this.localStorage.getData('buyerLoginData');
        if (user) {
            // logged in so return true
            console.log('logged in');
            return true;
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/buyer/auth/login']);
            this.toastr.success('Please login to continue');
            return false;
        }
    }
}
