import { TestBed } from '@angular/core/testing';

import { GetCartitemService } from './get-cartitem.service';

describe('GetCartitemService', () => {
  let service: GetCartitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCartitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
