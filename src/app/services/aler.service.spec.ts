import { TestBed } from '@angular/core/testing';

import { AlerService } from './aler.service';

describe('AlerService', () => {
  let service: AlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
