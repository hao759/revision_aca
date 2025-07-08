
import { AuthGuard } from './Core/auth.guard';
import { Routes } from '@angular/router';
import { DefaultLayoutComponent, EmailLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'qcresult',
    pathMatch: 'full'
  },
  {
    path: 'apps/email',
    component: EmailLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/apps/email/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: 'qcresult',
    data: {
      title: 'AI Detect'
    },
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/qc-result/routes').then((m) => m.routes),
      },
    ]
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'detect-attendance',
        loadChildren: () => import('./views/pages/detect-attendance/routes').then((m) => m.routes)
      },//??
      {
        path: 'blueForce_detect',
        loadChildren: () => import('./views/pages/blue-force-detect/routes').then((m) => m.routes)
      },
      {
        path: 'attendance-result-qc',
        loadChildren: () => import('./views/pages/attendance-result-qc/routes').then((m) => m.routes)
      },
      {
        path: 'attendance-result-ppt',
        loadChildren: () => import('./views/pages/attendance-result-ppt/routes').then((m) => m.routes)
      },
      {
        path: 'attendance-result-abbott',
        loadChildren: () => import('./views/pages/attendance-result-abbott/routes').then((m) => m.routes)
      },
      {
        path: 'employees-profile',
        loadChildren: () => import('./views/pages/employees-profile/routes').then((m) => m.routes),
      },
      {
        path: 'employees-abbott',
        loadChildren: () => import('./views/pages/employee-abbott/routes').then((m) => m.routes),
      },
      {
        path: 'detect',
        loadChildren: () => import('./views/pages/detect/routes').then((m) => m.routes),
      },
      {
        path: 'detect_2',
        loadChildren: () => import('./views/pages/detect-2/routes').then((m) => m.routes),
      },
      {
        path: 'ken_detect',
        loadChildren: () => import('./views/pages/ken-detect/routes').then((m) => m.routes),
      },
      {
        path: 'trademt_detect',
        loadChildren: () => import('./views/pages/trademt-detect/routes').then((m) => m.routes),
      },
      {
        path: 'upload_zip',
        loadChildren: () => import('./views/pages/upload-zip/routes').then((m) => m.routes),
      },
      {
        path: 'totalByShop',
        loadChildren: () => import('./views/pages/detect-ai-total-by-shop/routes').then((m) => m.routes),
      },
      {
        path: 'totalByShopUmer',
        loadChildren: () => import('./views/pages/detect-ai-total-by-shop-umer/routes').then((m) => m.routes),
      },
            {
        path: 'totalByShopBlueForce',
        loadChildren: () => import('./views/pages/detect-ai-total-by-shop-blueforce/routes').then((m) => m.routes),
      },
      {
        path: 'umer-demo',
        loadChildren: () => import('./views/pages/umer-demo/routes').then((m) => m.routes),
      },
            {
        path: 'blueforce-demo',
        loadChildren: () => import('./views/pages/blueforce-demo/routes').then((m) => m.routes),
      },

            {
        path: 'trademt-demo',
        loadChildren: () => import('./views/pages/trade-demo/routes').then((m) => m.routes),
      },
                  {
        path: 'demo-mutil',
        loadChildren: () => import('./views/pages/demo-mutil/routes').then((m) => m.routes),
      },

      // {
      //   path: 'blueForce_detect_multi',
      //   loadChildren: () => import('./views/pages/attendance-verify/routes').then((m) => m.routes)//blue-force multi
      // },

      /*{
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then((m) => m.routes)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
      },
      {
        path: 'smart-table',
        loadChildren: () => import('./views/smart-tables/routes').then((m) => m.routes)
      },
      {
        path: 'plugins',
        loadChildren: () => import('./views/plugins/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/apps/routes').then((m) => m.routes)
      },*/

    ],
    canActivate: [AuthGuard],
  },

  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'qcresult' }
];
