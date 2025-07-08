import { NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import {
  AvatarComponent,
  BadgeComponent,
  ButtonDirective,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormControlDirective,
  FormDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  ProgressComponent,
  SidebarToggleDirective
} from '@coreui/angular-pro';

import { IconDirective } from '@coreui/icons-angular';
import { EnumLocalStorage, EnumSystem } from 'src/app/Core/_enum';
import { Helper } from '../../../Core/_helper';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  imports: [ContainerComponent, HeaderTogglerDirective, SidebarToggleDirective, IconDirective, HeaderNavComponent, RouterLink, NgTemplateOutlet, DropdownComponent, DropdownToggleDirective, AvatarComponent, DropdownMenuDirective, DropdownHeaderDirective, DropdownItemDirective, BadgeComponent, DropdownDividerDirective, ProgressComponent, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, NgStyle, FormDirective]
})
export class DefaultHeaderComponent extends HeaderComponent {

  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;

  readonly colorModes = [
    { name: 'light', text: 'Light', icon: 'cilSun' },
    { name: 'dark', text: 'Dark', icon: 'cilMoon' },
    { name: 'auto', text: 'Auto', icon: 'cilContrast' }
  ];

  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return this.colorModes.find(mode => mode.name === currentMode)?.icon ?? 'cilSun';
  });

  constructor(private router: Router,) {
    super();
  }
  userlogin: any
  ngOnInit(): void {
    this.userlogin = Helper.loadUser().employee_name
    console.log(Helper.loadUser())

  }

  sidebarId = input('sidebar1');

  public newMessages = [
    {
      id: 0,
      from: 'AI Vision Insight',
      avatar: '7.jpg',
      status: 'success',
      title: 'Chào mừng bạn quay trở lại',
      time: 'Just now',
      link: 'apps/email/inbox/message',
      message: 'Vui lòng kiểm tra hình detect số facing'
    },

  ];

  public newNotifications = [
    { id: 0, title: 'Checking', icon: 'cilUserFollow', color: 'success' },
  ];


  public newTasks = [
    { id: 0, title: 'Update UI Vision', value: 90, color: 'info' },
  ];

  logOut() {
    this.router.navigateByUrl('/login');
    const pValue = localStorage.getItem('_p');
    localStorage.clear();
    if (pValue) {
      localStorage.setItem('_p', pValue);
    }
  }

}
