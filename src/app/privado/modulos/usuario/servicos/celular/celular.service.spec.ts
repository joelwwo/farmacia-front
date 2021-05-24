/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CelularService } from './celular.service';

describe('Service: Celular', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CelularService]
    });
  });

  it('should ...', inject([CelularService], (service: CelularService) => {
    expect(service).toBeTruthy();
  }));
});
