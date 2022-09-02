/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudConferenceService } from './crudConference.service';

describe('Service: CrudConference', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudConferenceService]
    });
  });

  it('should ...', inject([CrudConferenceService], (service: CrudConferenceService) => {
    expect(service).toBeTruthy();
  }));
});
