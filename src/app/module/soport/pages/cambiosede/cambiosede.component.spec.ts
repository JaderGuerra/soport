import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiosedeComponent } from './cambiosede.component';

describe('CambiosedeComponent', () => {
  let component: CambiosedeComponent;
  let fixture: ComponentFixture<CambiosedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiosedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiosedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
