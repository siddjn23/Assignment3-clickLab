import { TestBed, async, inject } from '@angular/core/testing';

import { MyBookingsGuard } from './my-bookings.guard';

describe('MyBookingsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyBookingsGuard]
    });
  });

  it('should ...', inject([MyBookingsGuard], (guard: MyBookingsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
