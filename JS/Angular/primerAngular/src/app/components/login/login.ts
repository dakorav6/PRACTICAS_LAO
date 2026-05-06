
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para el manejo de formularios (ej. ngModel)

// Importaciones de Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


import { Component, inject } from '@angular/core'; // Añadimos inject aquí
import { Router } from '@angular/router';


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
    RouterLink
  ]
})
export class Login {
// AQUÍ, dentro de la clase, es donde usas inject()
  private router = inject(Router); 

  validar() {
    // Lógica
    this.router.navigate(['/principal']);
            }
  
  }
