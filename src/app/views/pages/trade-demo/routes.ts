import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employees Profile Abbott'
    },
    loadComponent: () => import('./trade-demo.component').then(m => m.TradeDemoComponent)
  }
];