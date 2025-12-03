import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: 'sign-in',
    loadComponent: () =>
      import('./auth/sign-in/sign-in')
        .then(c => c.SignIn)
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./auth/sign-up/sign-up')
        .then(c => c.SignUp)
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  }
];
