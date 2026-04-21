import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para el manejo de formularios (ej. ngModel)

// Importaciones de Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule
  ]
})
export class Login {
  username = '';
  password = '';

  constructor() {}

  onLogin() {
    console.log('Login attempt with:', this.username, this.password);
    // Aquí iría tu lógica de autenticación
  }
}