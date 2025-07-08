import { Helper } from './../../Core/_helper';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';

import { IconDirective } from '@coreui/icons-angular';
import {
  ButtonCloseDirective,
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular-pro';
import { CommonModule } from '@angular/common';

import { DefaultAsideComponent, DefaultBreadcrumbComponent, DefaultFooterComponent, DefaultHeaderComponent } from './';
import { navItems } from './_nav';

function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    CommonModule,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    IconDirective,
    NgScrollbar,
    SidebarNavComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    DefaultAsideComponent,
    DefaultHeaderComponent,
    ShadowOnScrollDirective,
    ContainerComponent,
    RouterOutlet,
    DefaultFooterComponent,
    ButtonCloseDirective,
    DefaultBreadcrumbComponent
  ]
})
export class DefaultLayoutComponent {
  permission_button_raw = localStorage.getItem('permission_button');
  permission_button_id = this.permission_button_raw ? JSON.parse(this.permission_button_raw) : [];
  public navItems = navItems;

  ngOnInit(){
    if(this.permission_button_id.project_id == 44) {
      this.navItems = this.navItems.filter((item: any) => item.name !== "Attendance Result PPT" && item.name !== "Attendance Result QC");
    }
  }

  //menu_list => gan vao navItems.

  onScrollbarUpdate($event: any) {
    // if ($event.verticalUsed) {
    // console.log('verticalUsed', $event.verticalUsed);
    // }
  }

  isUnfoldable = false;

  toggleSidebar(){
    this.isUnfoldable = !this.isUnfoldable
  }
}
