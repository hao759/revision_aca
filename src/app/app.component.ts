import { EncryptDecryptService } from './Service/encrypt-decrypt.service';
import { EnumLocalStorage, EnumSystem } from './Core/_enum';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { delay, filter, map, tap } from 'rxjs/operators';

import { ColorModeService } from '@coreui/angular-pro';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Helper } from './Core/_helper';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  title = 'Acacy Revison Insight - AI QC Detect';

  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #titleService = inject(Title);

  readonly #colorModeService = inject(ColorModeService);
  readonly #iconSetService = inject(IconSetService);

  constructor(
    //add service to login use
    private edService: EncryptDecryptService,
  ) {
    this.#titleService.setTitle(this.title);
    // iconSet singleton
    this.#iconSetService.icons = { ...iconSubset };
    this.#colorModeService.localStorageItemName.set('coreui-pro-angular-admin-template-theme-bright');
    this.#colorModeService.eventName.set('ColorSchemeChange');
  }

  ngOnInit(): void {
    this.#router.events.pipe(
      takeUntilDestroyed(this.#destroyRef)
    ).subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });

    this.#activatedRoute.queryParams
      .pipe(
        delay(1),
        map(params => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
        filter(theme => ['dark', 'light', 'auto'].includes(theme)),
        tap(theme => {
          this.#colorModeService.colorMode.set(theme);
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();

    //login
    this.loadUser();
    try {
      localStorage.setItem('_p', this.edService.encryptUsingAES256(Helper.ProjectID()))
      if (
        localStorage.getItem(EnumLocalStorage.user_profile) ==
        EnumSystem.current
      ) {
        let _u = localStorage.getItem(EnumLocalStorage.user);
        if (_u == null) {
          this.#router.navigate(['/login']);
        }
      }
    } catch (error) { }
  }



  user_profile: any;
  currentUser: any;
  userProfile: any;
  loadUser() {
    let _u = localStorage.getItem(EnumLocalStorage.user);
    // console.log(_u);
    if (_u === null) {
      this.#router.navigate(['/login']);
      return
    }
    this.currentUser = JSON.parse(this.edService.decryptUsingAES256(_u));
    this.currentUser.employee[0]._status =
      this.currentUser.employee[0].status == 1 ? true : false;
    this.userProfile = this.currentUser.employee[0];
  }
}
