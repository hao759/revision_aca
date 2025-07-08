import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employees Profile Abbott'
    },
    loadComponent: () => import('./demo-mutil.component').then(m => m.DemoMutilComponent)
  }
];