import { Routes } from '@angular/router';
import { Orbe_Login } from './components/orbe-login/orbe-login'; // Asegúrate de que el nombre del archivo sea correcto
import { Orbe_Principal } from './components/orbe-principal/orbe-principal'; // Asegúrate de que el nombre del archivo sea correcto

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Orbe_Login },
  { path: 'principal', component: Orbe_Principal },
  { path: '**', redirectTo: 'login' }
];