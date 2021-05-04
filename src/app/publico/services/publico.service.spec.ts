/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicoService } from './publico.service';

describe('Service: Publico', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicoService]
    });
  });

  it('should ...', inject([PublicoService], (service: PublicoService) => {
    expect(service).toBeTruthy();
  }));
});
