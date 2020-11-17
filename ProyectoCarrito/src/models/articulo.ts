export class Articulo{

    nombre:string;
    descripcion:string;
    color:string;
    talla:number;
    cantidad:number;
    precio:number;

    constructor(nombre,descripcion,color,talla,cantidad,precio) {
    
        this.nombre= nombre;
        this.descripcion = descripcion;
        this.color = color;
        this.talla = talla;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}