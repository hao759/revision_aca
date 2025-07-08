import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpClient,
    HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { EncryptDecryptService } from '../Service/encrypt-decrypt.service';
import { EnumLocalStorage } from './_enum';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private edService: EncryptDecryptService
    ) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        try {
            let _u = localStorage.getItem(EnumLocalStorage.user);
            //get user current data
            let currentUser = JSON.parse(this.edService.decryptUsingAES256(_u));

            //check_token
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${currentUser.token}`,
                        ContentType: 'application/json',
                    },
                });

                next.handle(request).pipe(
                    tap((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            if (event.status === 200) {
                                // console.log('OK'); // Replace this with your desired action (e.g., display an alert)
                            } else {
                                console.log('ERROR');
                            }
                        }
                    })
                );
            } else {
                //not have token -> navigate login
                this.router.navigate(['/auth/login']);
            }
        } catch (error) { }

        return next.handle(request);
    }
}
