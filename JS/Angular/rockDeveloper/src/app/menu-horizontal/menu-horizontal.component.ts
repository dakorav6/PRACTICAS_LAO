import { Component, inject, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AutorizacionService } from '../autorizacion.service';
import { CommonModule } from '@angular/common';
import { MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CopyrightComponent } from '../copyright/copyright.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-horizontal',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './menu-horizontal.component.html',
  styleUrl: './menu-horizontal.component.css'
})
export class MenuHorizontalComponent implements OnInit{
  logueadoCabecera = false;

  readonly dialog = inject(MatDialog);

  constructor(private rutasPaginas:Router, private autoriza:AutorizacionService)
  {}

  ngOnInit(): void {
    this.autoriza.logeado$.subscribe(data => {
      this.logueadoCabecera = data;
      console.log(this.logueadoCabecera);
    })
  }

  mostrarLogin(){
    const dialogRef = this.dialog.open(LoginComponent,{width:'450px',height:'600px'});
  }

  cerrarSesion(){
    this.autoriza.logeado$.next(false);
    this.rutasPaginas.navigate(['']);
  }

  mostrarInventario(){
    this.rutasPaginas.navigate(['/inventario']);
  }
}
