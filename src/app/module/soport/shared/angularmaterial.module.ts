import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [],
  exports: [
    MatSidenavModule,
    MatRippleModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,

    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AngularmaterialModule {}
