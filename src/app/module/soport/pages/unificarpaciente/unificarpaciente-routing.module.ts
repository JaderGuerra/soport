import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnificarpacienteComponent } from './unificarpaciente.component';

const routes: Routes = [{ path: '', component: UnificarpacienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnificarpacienteRoutingModule { }
