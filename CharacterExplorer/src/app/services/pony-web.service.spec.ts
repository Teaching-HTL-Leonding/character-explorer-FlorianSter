import { TestBed } from '@angular/core/testing';

import { PonyWebService } from './pony-web.service';

describe('PonyWebService', () => {
  let service: PonyWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PonyWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
