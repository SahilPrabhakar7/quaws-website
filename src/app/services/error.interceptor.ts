// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { AuthenticationService } from 'src/app/services/authentication.service';
// import { ToastrService } from 'ngx-toastr';


// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//     constructor(
//       private authenticationService: AuthenticationService,
//         private toastr: ToastrService) { }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(request).pipe(catchError(err => {
//             if ([401, 403].includes(err.status)) {
//                 // auto logout if 401 or 403 response returned from api
//                 this.authenticationService.logout();
//             }

//             const error = (err && err.error && err.error.message) || err.statusText;
//             // this.toastr.error(error);
//             console.error(err);
//             return throwError(err);
//         }))
//     }
// }
