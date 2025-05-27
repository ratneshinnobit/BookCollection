import { TestBed } from '@angular/core/testing';

import { DecreaseQuantityService } from './decrease-quantity.service';

describe('DecreaseQuantityService', () => {
  let service: DecreaseQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecreaseQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
