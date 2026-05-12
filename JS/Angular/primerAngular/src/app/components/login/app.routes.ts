import { Routes } from '@angular/router';
import { Orbe_Login } from './components/orbe-login/orbe-login';
import { Orbe_Principal } from './components/orbe-principal/orbe-principal';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Orbe_Login },
  { path: 'principal', component: Orbe_Principal },
  { path: '**', redirectTo: 'login' }
];