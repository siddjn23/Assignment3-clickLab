import { TestBed } from '@angular/core/testing';

import { FetchbookingsService } from './fetchbookings.service';

describe('FetchbookingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchbookingsService = TestBed.get(FetchbookingsService);
    expect(service).toBeTruthy();
  });
});
