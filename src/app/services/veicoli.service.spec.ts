import { TestBed } from '@angular/core/testing';

import { VeicoliService } from './veicoli.service';

describe('VeicoliService', () => {
  let service: VeicoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeicoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
