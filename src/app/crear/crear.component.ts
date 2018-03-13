import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-crear',
    templateUrl: './crear.component.html',
    styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  lugar:any = {};
  id:any = null;
  constructor(private lugaresService: LugaresService, private route: ActivatedRoute){
        
         this.id = this.route.snapshot.params['id'];

         if (this.id != 'new') {
           this.lugaresService.getLugar(this.id)
             .valueChanges().subscribe((lugar)=> {
                 this.lugar = lugar;
             });
         }

  }
  guardarLugar() {
    var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion)
      .subscribe((result) => {
               // debugger;
              this.lugar.lat =  result.results[0].geometry.location.lat;
              this.lugar.lng =  result.results[0].geometry.location.lng;
         
              if (this.id != 'new') {

                  this.lugaresService.editarLugar(this.lugar);
                  alert('Negocio editado con éxito');

              } else {
                  this.lugar.id = Date.now();
                  this.lugaresService.guardarLugar(this.lugar);
                  alert('Negocio guardado con éxito');
              }
           
              this.lugar = {};
      });

  }
}  
