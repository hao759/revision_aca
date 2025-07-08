import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { EnumLocalStorage } from './_enum';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem(EnumLocalStorage.user)) {
            return true;
        }
        this.router.navigateByUrl('/login');
        // if (environment.menu_key === "routerLink")
        //     this.router.navigateByUrl('/auth/login');
        // else
        //     location.href = environment.url_login;
        // this.router.navigateByUrl('/dashboad');
        return false;
    }
}
