import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employees Profile'
    },
    loadComponent: () => import('./employees-profile.component').then(m => m.EmployeesProfileComponent)
  }
];