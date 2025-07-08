
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Detect'
        },
        loadComponent: () => import('./blueforce-demo.component').then(m => m.BlueforceDemoComponent)
    }
];