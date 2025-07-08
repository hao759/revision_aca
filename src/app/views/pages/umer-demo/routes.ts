
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Detect'
        },
        loadComponent: () => import('./umer-demo.component').then(m => m.UmerDemoComponent)
    }
];