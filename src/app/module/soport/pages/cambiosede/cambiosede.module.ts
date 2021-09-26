import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CambiosedeRoutingModule } from './cambiosede-routing.module';
import { CambiosedeComponent } from './cambiosede.component';


@NgModule({
  declarations: [
    CambiosedeComponent
  ],
  imports: [
    CommonModule,
    CambiosedeRoutingModule
  ]
})
export class CambiosedeModule { }
