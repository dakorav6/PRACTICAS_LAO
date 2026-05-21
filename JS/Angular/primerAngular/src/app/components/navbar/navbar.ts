import { Component , inject} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


import { MatDialogModule , MatDialog } from '@angular/material/dialog';
import { Login } from '../login/login'







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
   MatDialogModule, 
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavBarComponent {
  public readonly appName = 'MiApp';

  
  private dialog = inject(MatDialog);

loginModal():void {

  this.dialog.open(Login);




}


}