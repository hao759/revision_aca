import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err) => {
                if (err.status === 401) {
                    // auto logout if 401 response returned from api
                    // localStorage.clear();
                }
                if (err.status === 200) {
                } else {
                    console.log(err.status + ' SERVER');
                }

                const error = err; //.error || err.statusText;

                return throwError(error);
            })
        );
    }
}
