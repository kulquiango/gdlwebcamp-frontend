import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Router } from '@angular/router'
@Injectable({
	providedIn: 'root',
})
export class CrudGuestsService {
	private baseUrl = environment.baseUrl
	constructor(private httpClient: HttpClient, private router: Router) {}
	get guests() {
		return this.read()
	}

	// readToken(): any {
	// 	return JSON.parse(localStorage.getItem('user')!)
	// }
	read() {
		return this.httpClient.get<any>(`${this.baseUrl}/guests/read`)
	}
}
