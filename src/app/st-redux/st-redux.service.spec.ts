import { TestBed, inject } from '@angular/core/testing';

import { StReduxService } from './st-redux.service';

describe('StReduxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StReduxService]
    });
  });

  it('should be created', inject([StReduxService], (service: StReduxService) => {
    expect(service).toBeTruthy();
  }));
});
