import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoportComponent } from './soport.component';

const routes: Routes = [
  {
    path: '',
    component: SoportComponent,
    children: [
      {
        path: 'UnificarPacientes',
        loadChildren: () =>
          import('./pages/unificarpaciente/unificarpaciente.module').then(
            (m) => m.UnificarpacienteModule
          ),
      },
      {
        path: 'CambioDeSede',
        loadChildren: () =>
          import('./pages/cambiosede/cambiosede.module').then(
            (m) => m.CambiosedeModule
          ),
      },
      {
        path: '',
        redirectTo: 'UnificarPacientes',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoportRoutingModule {}
