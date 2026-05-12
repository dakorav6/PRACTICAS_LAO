import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-orbe-inicio',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet],
  templateUrl: './orbe-inicio.html',
  styleUrl: './orbe-inicio.css'
})
export class Orbe_Inicio {}