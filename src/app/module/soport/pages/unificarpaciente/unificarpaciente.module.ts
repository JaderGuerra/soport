import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnificarpacienteRoutingModule } from './unificarpaciente-routing.module';
import { UnificarpacienteComponent } from './unificarpaciente.component';
import { AngularmaterialModule } from '../../shared/angularmaterial.module';
import { SharedmodulesModule } from '../../shared/sharedmodules.module';

@NgModule({
  declarations: [UnificarpacienteComponent],
  imports: [
    CommonModule,
    UnificarpacienteRoutingModule,
    AngularmaterialModule,
    SharedmodulesModule,
  ],
})
export class UnificarpacienteModule {}
