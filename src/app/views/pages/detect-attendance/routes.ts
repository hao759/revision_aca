
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    loadComponent: () => import('./detect-attendance.component').then(m => m.DetectAttendanceComponent)
  }
];