import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionesPageRoutingModule } from './direcciones-routing.module';

import { DireccionesPage } from './direcciones.page';
import {DireccioninfoPage} from "../direccioninfo/direccioninfo.page";
import {DireccioninfoPageModule} from "../direccioninfo/direccioninfo.module";

@NgModule({
  entryComponents: [
      DireccioninfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionesPageRoutingModule,
      DireccioninfoPageModule
  ],
  declarations: [DireccionesPage]
})
export class DireccionesPageModule {}
