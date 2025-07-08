import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Attendance Result PPT'
    },
    loadComponent: () => import('./attendance-result.component').then(m => m.AttendanceResultComponent)
  }
];