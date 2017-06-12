import { TestBed, inject } from '@angular/core/testing';

import { LoginGurardService } from './login-gurard.service';

describe('LoginGurardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGurardService]
    });
  });

  it('should be created', inject([LoginGurardService], (service: LoginGurardService) => {
    expect(service).toBeTruthy();
  }));
});
