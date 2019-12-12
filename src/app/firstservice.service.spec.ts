import { TestBed } from '@angular/core/testing';

import { FirstserviceService } from './firstservice.service';

describe('FirstserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstserviceService = TestBed.get(FirstserviceService);
    expect(service).toBeTruthy();
  });
});
