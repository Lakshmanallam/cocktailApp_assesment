import { TestBed } from '@angular/core/testing';

import { CocktaildatafetchService } from './cocktaildatafetch.service';

describe('CocktaildatafetchService', () => {
  let service: CocktaildatafetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktaildatafetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
