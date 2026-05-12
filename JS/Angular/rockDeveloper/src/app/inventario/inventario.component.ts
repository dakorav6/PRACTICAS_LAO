import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConsultaProductoComponent } from '../consulta-producto/consulta-producto.component';
import { AutorizacionService } from '../autorizacion.service';


@Component({
  selector: 'app-inventario',
  imports: [MatTableModule, CommonModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'price', 'proveed','action'];
  dataSource:any=[];
  
  productoSelect: any = {};
  tablaProductos: any = {};

  readonly dialog = inject(MatDialog);
  
  constructor(private autoriza:AutorizacionService){}
  
  ngOnInit(){ 
    
    //Verifica la selección de un producto
    this.autoriza.producto$.subscribe(data => {
        this.productoSelect = data;
        console.log(this.productoSelect);
    })   

    //Verificar los cambios en la tabla de producto
    this.autoriza.productosTabla$.subscribe(data => {
        this.tablaProductos = data;
        console.log(this.productoSelect);
        this.dataSource = new MatTableDataSource<any>(data);
    }) 
 
  }

  mostrarProducto(row:any){
      const dialogRef = this.dialog.open(ConsultaProductoComponent,{width:'450px',height:'600px'});
      this.autoriza.producto$.next(row);
  }

  eliminarProducto(row:any){ 
    //Se busca el indice de la fila seleccionada
    const index = this.tablaProductos.findIndex((x: { position: any; }) => x.position === row.position);

    //Se elimina de tabla el elemento cuyo indice coincida
    this.tablaProductos.splice(index,1);

    //Se actualiza la variable global con la nueva tabla
    this.autoriza.productosTabla$.next(this.tablaProductos);
  }
}
