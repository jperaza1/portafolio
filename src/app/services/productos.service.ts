import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;
  constructor(private http:Http) {
      this.cargar_productos();
   }


   public cargar_productos(){
     this.cargando = true;
    this.http.get("https://portafolio-3e190.firebaseio.com/productos_idx.json")
    .subscribe( res => {

      console.log(res.json());

      setTimeout( ()=>{
        this.productos = res.json();
        this.cargando = false;
      },1500)

      

    })
   }

}
