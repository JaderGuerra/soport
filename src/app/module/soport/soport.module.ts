import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoportRoutingModule } from './soport-routing.module';
import { SoportComponent } from './soport.component';
import { AngularmaterialModule } from './shared/angularmaterial.module';

@NgModule({
  declarations: [SoportComponent],
  imports: [CommonModule, SoportRoutingModule, AngularmaterialModule],
  providers: [],
})
export class SoportModule {}
