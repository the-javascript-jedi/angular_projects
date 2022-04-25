import { TestBed } from '@angular/core/testing';

import { PhotoFetchService } from './photo-fetch.service';

describe('PhotoFetchService', () => {
  let service: PhotoFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
