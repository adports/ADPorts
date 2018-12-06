import { TestBed } from '@angular/core/testing';

import { CreatepassService } from './createpass.service';

describe('CreatepassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatepassService = TestBed.get(CreatepassService);
    expect(service).toBeTruthy();
  });
});
