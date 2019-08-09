import { TestBed } from '@angular/core/testing';

import { GetAllProductService } from './get-all-product.service';

describe('GetAllProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllProductService = TestBed.get(GetAllProductService);
    expect(service).toBeTruthy();
  });
});
