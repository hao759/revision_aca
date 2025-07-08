import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employees Profile Abbott'
    },
    loadComponent: () => import('./employee-abbott.component').then(m => m.EmployeeAbbottComponent)
  }
];