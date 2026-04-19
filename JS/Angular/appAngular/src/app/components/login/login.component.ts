import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Variables para el binding de datos
  username = '';
  password = '';

  onLogin() {
    // Lógica de autenticación simplificada
    console.log('Iniciando sesión con:', this.username);
    alert(`Acceso solicitado para: ${this.username}`);
  }
}