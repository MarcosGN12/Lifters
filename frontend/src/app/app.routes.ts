import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Routines } from './pages/routines/routines';
import { TrainingPlans } from './pages/training-plans/training-plans';
import { Exercises } from './pages/exercises/exercises';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    canActivate: [authGuard],
  },

  {
    path: 'routines',
    component: Routines,
    canActivate: [authGuard],
  },

  {
    path: 'training-plans',
    component: TrainingPlans,
    canActivate: [authGuard],
  },

  {
    path: 'exercises',
    component: Exercises,
    canActivate: [authGuard],
  },

  {
    path: 'login',
    component: Login,
  },
];
