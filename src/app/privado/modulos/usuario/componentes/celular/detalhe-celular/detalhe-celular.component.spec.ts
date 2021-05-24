import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCelularComponent } from './detalhe-celular.component';

describe('DetalheCelularComponent', () => {
  let component: DetalheCelularComponent;
  let fixture: ComponentFixture<DetalheCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheCelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
