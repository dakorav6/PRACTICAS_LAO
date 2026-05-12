import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AutorizacionService } from '../autorizacion.service';


@Component({
  selector: 'app-consulta-producto',
  imports: [FormsModule, CommonModule],
  templateUrl: './consulta-producto.component.html',
  styleUrl: './consulta-producto.component.css'
})
export class ConsultaProductoComponent implements OnInit{
    idProducto:string = '';
    NombreProducto:string = '';
    PrecioProducto:number = 0;
    ProveedorProducto:string = '';

    constructor(private autoriza:AutorizacionService){}

    ngOnInit(): void {
      this.autoriza.producto$.subscribe(data => {
          this.idProducto = data.position;
          this.NombreProducto = data.name;
          this.PrecioProducto = data.price;
          this.ProveedorProducto = data.proveed;
        })
      }
}
