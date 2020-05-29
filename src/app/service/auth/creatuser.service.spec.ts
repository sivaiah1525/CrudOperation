import { TestBed } from '@angular/core/testing';

import { CreatuserService } from './creatuser.service';

describe('CreatuserService', () => {
  let service: CreatuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
