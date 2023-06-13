import { TestBed } from '@angular/core/testing';

import { customInterceptor } from './custom.interceptor';

describe('CustomInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      customInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor = TestBed.inject(customInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
