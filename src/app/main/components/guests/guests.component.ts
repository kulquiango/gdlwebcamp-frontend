import { Component, OnInit, Output } from '@angular/core'
import { CrudGuestsService } from 'src/app/service/crudGuests.service'

@Component({
	selector: 'app-guests',
	templateUrl: './guests.component.html',
	styleUrls: ['./guests.component.css'],
})
export class GuestsComponent implements OnInit {
	public guests: Array<any> = []

	constructor(private serviceGuests: CrudGuestsService) {}

	ngOnInit(): void {
		this.serviceGuests.read().subscribe((res) => {
			this.guests = res.data
		})
	}
}
