
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Detect'
        },
        loadComponent: () => import('./detect-2.component').then(m => m.Detect2Component)
    }
];