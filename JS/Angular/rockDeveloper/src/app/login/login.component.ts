import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AutorizacionService } from '../autorizacion.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailTest:string = '';
  passwordTest:string = '';

  constructor(private rutasPaginas:Router, private autoriza:AutorizacionService, private dialogRef:MatDialogRef<LoginComponent>){}
  
  validarAcceso(){
    alert("El usuario ha sido verificado...");
    this.autoriza.logeado$.next(true);
    this.dialogRef.close();
    this.rutasPaginas.navigate(['/principal']);

  }
}
