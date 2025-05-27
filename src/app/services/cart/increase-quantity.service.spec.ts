import { TestBed } from '@angular/core/testing';

import { IncreaseQuantityService } from './increase-quantity.service';

describe('IncreaseQuantityService', () => {
  let service: IncreaseQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncreaseQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
