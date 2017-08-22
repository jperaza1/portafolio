import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;
  constructor(private http:Http) {
      this.cargar_productos();
   }

   public cargr_producto(_id:string){

    return this.http.get(`https://portafolio-3e190.firebaseio.com/productos/${_id}.json`);
      
   }

   public cargar_productos(){
     this.cargando = true;
    this.http.get("https://portafolio-3e190.firebaseio.com/productos_idx.json")
    .subscribe( res => {

      setTimeout( ()=>{
        this.productos = res.json();
        this.cargando = false;
      },1500)

      

    })
   }

}
