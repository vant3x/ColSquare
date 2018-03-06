import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
// import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-crear',
    templateUrl: './crear.component.html',
    styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  lugar:any = {};
  constructor(private lugaresService: LugaresService){

  }
  guardarLugar() {
    this.lugaresService.guardarLugar(this.lugar);
  }
}
