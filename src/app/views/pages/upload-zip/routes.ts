
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Upload Zip'
        },
        loadComponent: () => import('./upload-zip.component').then(m => m.UploadZipComponent)
    }
];