import { Component, OnInit } from '@angular/core'
import { CrudConferenceService } from 'src/app/service/crudConference.service'

@Component({
	selector: 'app-conference-page',
	templateUrl: './conference-page.component.html',
	styleUrls: ['./conference-page.component.css'],
})
export class ConferencePageComponent implements OnInit {
	public galery: Array<any> = []
	constructor(private conferenceService: CrudConferenceService) {}
	private path: string = 'assets/images/galery/'

	getPath() {
		return this.path
	}

	ngOnInit(): void {
		this.conferenceService.read().subscribe((res) => {
			this.galery = res.data
		})
	}
}
