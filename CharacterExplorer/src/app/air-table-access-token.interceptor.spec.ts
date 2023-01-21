import { TestBed } from '@angular/core/testing';

import { AirTableAccessTokenInterceptor } from './air-table-access-token.interceptor';

describe('AirTableAccessTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AirTableAccessTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AirTableAccessTokenInterceptor = TestBed.inject(AirTableAccessTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
