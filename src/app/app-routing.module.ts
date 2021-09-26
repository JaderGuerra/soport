import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'soporte',
    loadChildren: () =>
      import('./module/soport/soport.module').then((m) => m.SoportModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'soporte' },

  { path: '**', pathMatch: 'full', redirectTo: 'soporte' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
