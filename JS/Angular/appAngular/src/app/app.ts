import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { Navbar } from './components/navbar/navbar';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Navbar, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appAngular');
}
