import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { tap } from 'rxjs/operators';
import appConfig from '../app.config';
import { LocalStorageHandler } from './localStorageHandler';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private localStore: LocalStorageHandler) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Updates security headers on request
        req = this.updateRequestHeaders(req);
        // Pass on the cloned request instead of the original request.
        return next.handle(req);
    }

    private updateRequestHeaders(request: HttpRequest<any>): HttpRequest<any> {
        let req = request.clone();
        // let httpRequest = new HttpRequest(<any>req.method, `${appConfig.apiUrl}${req.urlWithParams}`);
        // req = Object.assign(req, httpRequest);
        if (!req.headers.has('Authorization')) {
            let _data = this.localStore.getData('buyerLoginData');

            if (_data) {
                let token = `${_data.token_type} ${_data.access_token}`;
                req = req.clone({ headers: req.headers.set('Authorization', token) });
            }
        }
        return req;
    }
}