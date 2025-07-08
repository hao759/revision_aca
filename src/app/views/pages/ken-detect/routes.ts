
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Ken_detect'
        },
        loadComponent: () => import('./ken-detect.component').then(m => m.KenDetectComponent)
    }
];