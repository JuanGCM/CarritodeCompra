import { Component, OnInit } from '@angular/core';
import {Articulo} from '../../../models/articulo';

@Component({
  selector: 'app-articulos-component',
  templateUrl: './articulos-component.component.html',
  styleUrls: ['./articulos-component.component.scss']
})
export class ArticulosComponentComponent implements OnInit {

  listaProductos:Articulo[];

  constructor() { 
    this.listaProductos = [
      new Articulo('Zapatos','Bota Worker','marron',42,1,20),
      new Articulo('Sandalias','Sandals con franjas','amarillo',45,2,15),
      new Articulo('Botines','Botas montañeras','mostaza',42,1,30)
    ];

  }

  ngOnInit(): void {
  }

}
