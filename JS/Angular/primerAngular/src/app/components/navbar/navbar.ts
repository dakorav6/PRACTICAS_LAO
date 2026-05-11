import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// Nombre semántico correcto en Angular
interface NavigationItem {
  label: string;
  path: string;
  isSpecial?: boolean; // Para distinguir el botón de Login
}

@Component({
  selector: 'navbar', // Prefijo estándar
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavBarComponent {
  public readonly appName = 'MiApp';

  // Centralizamos TODO el menú, incluido el Login
  public readonly navItems: NavigationItem[] = [
    { label: 'Inicio',    path: '/home' },
    { label: 'Acerca de', path: '/about' },
    { label: 'Contacto',  path: '/contact' },
    { label: 'Login',     path: '/login', isSpecial: true }
  ];
}