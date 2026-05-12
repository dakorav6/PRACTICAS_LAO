import { Component } from '@angular/core';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MenuHorizontalComponent, CopyrightComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rockDeveloper';
}
