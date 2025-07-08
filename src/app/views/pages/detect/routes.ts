
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Detect'
        },
        loadComponent: () => import('./detect.component').then(m => m.DetectComponent)
    }
];