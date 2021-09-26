import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-unificarpaciente',
  templateUrl: './unificarpaciente.component.html',
  styleUrls: ['./unificarpaciente.component.css'],
})
export class UnificarpacienteComponent implements OnInit {
  firstFormGroup: any;
  secondFormGroup: any;

  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  /*   send(form: any) {
    console.log(form);
  }
  send2(form: any) {
    console.log(form);
  } */

  createForm() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
