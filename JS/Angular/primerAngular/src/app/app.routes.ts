import { Routes } from '@angular/router';
import { Principal } from './components/principal/principal';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'principal', component: Principal },
    { path: '**', redirectTo: 'login' }
];


