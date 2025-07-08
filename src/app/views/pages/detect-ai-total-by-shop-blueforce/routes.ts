import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Employees Profile Abbott'
        },
        loadComponent: () => import('./detect-ai-total-by-shop-blueforce.component').then(m => m.DetectAiTotalByShopBlueforceComponent)
    }
];