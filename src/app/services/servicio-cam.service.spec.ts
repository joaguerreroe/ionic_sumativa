import { TestBed } from '@angular/core/testing';

import { ServicioCamService } from './servicio-cam.service';

describe('ServicioCamService', () => {
  let service: ServicioCamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
