import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiosedeComponent } from './cambiosede.component';

const routes: Routes = [{ path: '', component: CambiosedeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CambiosedeRoutingModule { }
