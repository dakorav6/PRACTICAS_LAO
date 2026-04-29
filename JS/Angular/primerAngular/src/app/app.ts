import { Component, signal } from '@angular/core';
import { Login } from './components/login/login';
import { Footer } from './components/footer/footer';
import {pagina-principal} from './components/pagina-principal/pagina-principal';

@Component({
  selector: 'app-root',
  imports: [Login, Footer, pagina-principal ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primerAngular');
}
