import { TestBed } from '@angular/core/testing';

import { TokenservService } from './tokenserv.service';

describe('TokenservService', () => {
  let service: TokenservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
