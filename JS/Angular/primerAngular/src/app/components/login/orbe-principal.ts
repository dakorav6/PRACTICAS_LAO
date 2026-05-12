import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-orbe-principal',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './orbe-principal.html',
  styleUrl: './orbe-principal.css'
})
export class Orbe_Principal {
  private router = inject(Router);

  // Objeto para el formulario
  usuarioForm = {
    cedula: '',
    nombre: '',
    apellido: '',
    password: ''
  };

  // Arreglo para acumular registros
  registros: any[] = [];

  aceptar() {
    // Ingresar datos al objeto y acumular
    this.registros.push({ ...this.usuarioForm });

    // Requerimiento: Mostrar por Consola de Desarrollador
    console.log('Registros totales:', this.registros);

    // Requerimiento: Alerta con el número de objetos totales
    alert('Total de usuarios registrados: ' + this.registros.length);

    // Limpiar cajas de texto
    this.usuarioForm = {
      cedula: '', nombre: '', apellido: '', password: ''
    };
  }

  salir() {
    // Requerimiento: Llevarlo a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}