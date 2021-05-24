import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCelularComponent } from './lista-celular.component';

describe('ListaCelularComponent', () => {
  let component: ListaCelularComponent;
  let fixture: ComponentFixture<ListaCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
