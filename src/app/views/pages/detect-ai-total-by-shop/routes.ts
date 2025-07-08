import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employees Profile Abbott'
    },
    loadComponent: () => import('./detect-ai-total-by-shop.component').then(m => m.DetectAITotalByShopComponent)
  }
];