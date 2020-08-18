import { TestBed } from '@angular/core/testing';

import { ProduitsServicesService } from './produits-services.service';

describe('ProduitsServicesService', () => {
  let service: ProduitsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
