import { TestBed } from '@angular/core/testing';

import { GetFavouriteService } from './get-favourite.service';

describe('GetFavouriteService', () => {
  let service: GetFavouriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFavouriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
