import { Component, signal } from '@angular/core';
import { Login } from './components/login/login';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Login, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primerAngular');
}
