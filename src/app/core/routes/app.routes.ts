import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', loadChildren: () => import('./access.routes').then(routes => routes.ACCESS_ROUTES), title: 'Welcome' },
    { path: '404', loadComponent: () => import('../components/not-found/not-found.component').then(c => c.NotFoundComponent) },
    { path: '**', redirectTo: '404' }
];
