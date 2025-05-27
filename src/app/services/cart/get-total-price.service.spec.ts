import { TestBed } from '@angular/core/testing';

import { GetTotalPriceService } from './get-total-price.service';

describe('GetTotalPriceService', () => {
  let service: GetTotalPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTotalPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
