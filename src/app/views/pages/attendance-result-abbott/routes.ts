import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Attendance Result Abbott'
    },
    loadComponent: () => import('./attendance-result-abbott.component').then(m => m.AttendanceResultAbbottComponent)
  }
];
