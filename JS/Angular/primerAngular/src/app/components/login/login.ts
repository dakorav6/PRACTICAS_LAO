
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para el manejo de formularios (ej. ngModel)

// Importaciones de Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



import { Component, inject, signal } from '@angular/core'; // Añadimos inject aquí
import { Router } from '@angular/router'; 
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true, // Componente standalone
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class Login {
// AQUÍ, dentro de la clase, es donde usas inject()
  
private miNavegacion= inject(Router);
private cerrarNav=inject(MatDialogRef);


usuario: string= ``;
contrasena: string= ``;


entrar():void {

    if(this.usuario==`produ02` && this.contrasena==`erat1027`) {
        this.cerrarNav.close();  // 1. cierra el modal
        this.miNavegacion.navigate(['/principal']);
      }
  }
}