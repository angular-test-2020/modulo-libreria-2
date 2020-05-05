import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaConceptoLibreriaDosComponent } from './prueba-concepto-libreria-dos.component';

describe('PruebaConceptoLibreriaDosComponent', () => {
  let component: PruebaConceptoLibreriaDosComponent;
  let fixture: ComponentFixture<PruebaConceptoLibreriaDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaConceptoLibreriaDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaConceptoLibreriaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
