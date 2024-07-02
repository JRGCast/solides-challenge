import { Routes } from '@angular/router';

export const ACCESS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('../../pages/landing-page/landing-page.component').then(c => c.LandingPageComponent),
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            {
                path: 'login',
                loadComponent: () => import('../../pages/landing-page/components/login/login.component').then(c => c.LoginComponent),
                title: 'Login'
            },
            {
                path: 'create',
                loadComponent: () => import('../../pages/landing-page/components/create/create.component').then(c => c.CreateComponent),
                title: 'Create'
            }
        ]
    },
];
