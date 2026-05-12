import { Component, signal } from '@angular/core';
import { Orbe_Inicio } from './components/orbe-inicio/orbe-inicio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Orbe_Inicio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Orbe_LeccionPP');
}
