import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PrincipalComponent } from './principal/principal.component';
import { InventarioComponent } from './inventario/inventario.component';

export const routes: Routes = [
    {path:'', component: PaginaInicialComponent},
    {path:'principal', component: PrincipalComponent },
    {path:'inventario', component: InventarioComponent}
];
