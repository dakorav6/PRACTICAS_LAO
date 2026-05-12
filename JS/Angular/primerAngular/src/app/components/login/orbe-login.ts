import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-orbe-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './orbe-login.html',
  styleUrl: './orbe-login.css'
})
export class Orbe_Login {
  private router = inject(Router);

  // Unificado con el HTML
  acceso = {
    usuario: '',
    clave: ''
  };

  mensaje: string = '';
  esError: boolean = false;

  validar() {
    // Requerimiento: Ubicar datos directamente en la condición
    if (this.acceso.usuario === 'admin' && this.acceso.clave === 'orbe123') {
      this.mensaje = '¡Bienvenido al sistema!';
      this.esError = false;
      // Navegación programática
      setTimeout(() => this.router.navigate(['/principal']), 1000);
    } else {
      this.mensaje = 'Usuario o clave incorrectos';
      this.esError = true;
    }
  }
}