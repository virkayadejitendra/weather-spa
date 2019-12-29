/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WetherService } from './wether.service';

describe('Service: Wether', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WetherService]
    });
  });

  it('should ...', inject([WetherService], (service: WetherService) => {
    expect(service).toBeTruthy();
  }));
});
