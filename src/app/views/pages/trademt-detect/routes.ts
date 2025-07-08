
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Detect'
        },
        loadComponent: () => import('./trademt-detect.component').then(m => m.TrademtDetectComponent)
    }
];