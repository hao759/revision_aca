
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'BlueForce_detect'
        },
        loadComponent: () => import('./blue-force-detect.component').then(m => m.BlueForceDetectComponent)
    }
];