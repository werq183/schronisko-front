import { TestBed } from '@angular/core/testing';

import { OgloszeniaService } from './ogloszenia.service';

describe('OgloszeniaService', () => {
  let service: OgloszeniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OgloszeniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
