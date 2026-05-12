import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface InventarioElement {
    position: number;
    name: string;
    price: number;
    proveed: string;
}

const ELEMENT_DATA: InventarioElement[] = [
    {position: 1, name: 'Atun Real', price: 2.15, proveed: 'H'},
    {position: 2, name: 'Arroz Pepito 10Kg', price: 11.52, proveed: 'H'},
    {position: 3, name: 'Aceite La Favorita', price: 3.05, proveed: 'H'},
    {position: 4, name: 'Fideos Doña Petrona', price: 0.85, proveed: 'H'},
];

@Injectable({
  providedIn: 'root'
})


export class AutorizacionService {

    object: any = {};
    
    //Variable que me permite determinar si está logeado al sistem
    public logeado$ = new BehaviorSubject<boolean>(false);
    
    //Producto seleccionado en la ventana de Inventario
    public producto$ = new BehaviorSubject<any>(this.object);

     //Tabla de los Productos de Inventario
    public productosTabla$ = new BehaviorSubject<any>(ELEMENT_DATA);

    constructor() { }
}
