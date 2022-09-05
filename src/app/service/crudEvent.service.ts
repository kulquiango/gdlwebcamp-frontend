import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Router } from '@angular/router'

@Injectable({
	providedIn: 'root',
})
export class CrudEventService {
	private baseUrl = environment.baseUrl
	constructor(private httpClient: HttpClient) {}
	get eventInfo() {
		return this.read()
	}

	read() {
		return this.httpClient.get<any>(`${this.baseUrl}/eventInfo/read`)
	}
}
