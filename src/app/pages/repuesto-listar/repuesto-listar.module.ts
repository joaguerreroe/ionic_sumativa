import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepuestoListarPageRoutingModule } from './repuesto-listar-routing.module';

import { RepuestoListarPage } from './repuesto-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepuestoListarPageRoutingModule
  ],
  declarations: [RepuestoListarPage]
})
export class RepuestoListarPageModule {}
