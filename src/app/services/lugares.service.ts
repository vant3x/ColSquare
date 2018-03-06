import { Injectable } from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class LugaresService{
  lugares:any = [
    {id: 1, plan: 'gratuito', cercania: 1, distancia: 1.5, active: true, nombre:'Veterinaria Malawi'},
    {id: 2, plan: 'pagado', cercania: 1, distancia: 10, active: true, nombre:'Donas Dunkin'},
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 2, active: false, nombre:'Heladería Star Cream'},
    {id: 4, plan: 'pagado', cercania: 3, distancia: 0.5, active: true, nombre:'Supermercado Altos del Sur'},
    {id: 5, plan: 'pagado', cercania: 3, distancia: 8, active: true, nombre:'Cafetería Urbania'}

  ];
  constructor(private afDB:AngularFireDatabase) {}

  public getLugares(){
    return this.lugares;
  }
  public buscarLugar(id){
    return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
  }
  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/1').set(lugar);
  }
}
