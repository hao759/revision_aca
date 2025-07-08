import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Attendance Result QC'
        },
        loadComponent: () => import('./attendance-result-qc.component').then(m => m.AttendanceResultQcComponent)
    }
];