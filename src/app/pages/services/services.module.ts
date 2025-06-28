import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';

import { ServicesPageRoutingModule } from './services-routing.module';

import { ServicesPage } from './services.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    IonicModule,
    ServicesPageRoutingModule
  ],
  declarations: [ServicesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesPageModule {}
