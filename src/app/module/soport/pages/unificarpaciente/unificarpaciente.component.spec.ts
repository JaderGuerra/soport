import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnificarpacienteComponent } from './unificarpaciente.component';

describe('UnificarpacienteComponent', () => {
  let component: UnificarpacienteComponent;
  let fixture: ComponentFixture<UnificarpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnificarpacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnificarpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
