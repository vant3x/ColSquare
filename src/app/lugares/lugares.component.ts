import { LugaresService } from './../services/lugares.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']

})
export class LugaresComponent {
    title = 'Colsquare';

    lat:number = 6.2196925;
    lng:number = -75.6524145;
    lugares = null;
    constructor(private lugaresService: LugaresService){
      this.lugares = lugaresService.getLugares();
    }

}
