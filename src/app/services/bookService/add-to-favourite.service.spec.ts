import { TestBed } from '@angular/core/testing';

import { AddToFavouriteService } from './add-to-favourite.service';

describe('AddToFavouriteService', () => {
  let service: AddToFavouriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToFavouriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
