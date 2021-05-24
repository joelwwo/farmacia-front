import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCelularComponent } from './form-celular.component';

describe('FormCelularComponent', () => {
  let component: FormCelularComponent;
  let fixture: ComponentFixture<FormCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
