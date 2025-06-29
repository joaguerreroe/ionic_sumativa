import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepuestoCrearPage } from './repuesto-crear.page';

const routes: Routes = [
  {
    path: '',
    component: RepuestoCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepuestoCrearPageRoutingModule {}
