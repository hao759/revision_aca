import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '404',
    loadComponent: () => import('./page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'detect',
    loadComponent: () => import('./detect/detect.component').then(m => m.DetectComponent),
    data: {
      title: 'Detect Page'
    }
  },
  // {
  //   path: 'detect_2',
  //   loadComponent: () => import('./detect-2/detect-2.component').then(m => m.Detect2Component),
  //   data: {
  //     title: 'Detect Page'
  //   }
  // },
  {
    path: 'ken_detect',
    loadComponent: () => import('./ken-detect/ken-detect.component').then(m => m.KenDetectComponent),
    data: {
      title: 'Detect Page'
    }
  },
];
