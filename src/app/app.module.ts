import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import {DetalleComponent} from './detalle/detalle.component';
import {LugaresComponent} from './lugares/lugares.component';
import {ContactoComponent} from './contacto/contacto.component';
import {LugaresService} from "./services/lugares.service";
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {CrearComponent} from './crear/crear.component';
import { SweetAlertService } from 'angular-sweetalert-service';


const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear', component: CrearComponent},
];
export const firebaseConfig = {
  // cambiar estos datos
  apiKey: "AIzaSyDbkanUbz90jdhqeQHXL2OKL28YaJF7OMo",
  authDomain: "colsquare-1519767727847.firebaseapp.com",
  databaseURL: "https://colsquare-1519767727847.firebaseio.com",
  storageBucket: "colsquare-1519767727847.appspot.com",
  messagingSenderId: "768376583955"
};
@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
      ContarClicksDirective,
      DetalleComponent,
      LugaresComponent,
      ContactoComponent,
      CrearComponent

  ],
  imports: [
    BrowserModule,
     FormsModule,
     HttpClientModule,
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDB2ipW8I8UJzGIEyo8qMJDROXdo9yRzM'
    }),
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    LugaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
