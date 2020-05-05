import { TestBed } from '@angular/core/testing';

import { PruebaConceptoLibreriaDosService } from './prueba-concepto-libreria-dos.service';

describe('PruebaConceptoLibreriaDosService', () => {
  let service: PruebaConceptoLibreriaDosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaConceptoLibreriaDosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
