/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { CrudEventService } from './crudEvent.service'

describe('Service: CrudEvent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [CrudEventService],
		})
	})

	it('should ...', inject([CrudEventService], (service: CrudEventService) => {
		expect(service).toBeTruthy()
	}))
})
