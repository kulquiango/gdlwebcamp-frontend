/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudGuestsService } from './crudGuests.service';

describe('Service: CrudGuests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudGuestsService]
    });
  });

  it('should ...', inject([CrudGuestsService], (service: CrudGuestsService) => {
    expect(service).toBeTruthy();
  }));
});
