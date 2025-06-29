import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RepuestoCrearPageRoutingModule } from './repuesto-crear-routing.module';

import { RepuestoCrearPage } from './repuesto-crear.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RepuestoCrearPageRoutingModule
  ],
  declarations: [RepuestoCrearPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RepuestoCrearPageModule {}
