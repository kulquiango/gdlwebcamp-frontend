import { Component, OnInit } from '@angular/core'
import { CrudEventService } from 'src/app/service/crudEvent.service'
import { CalendarService } from '../../../service/calendar.service'

@Component({
	selector: 'app-reservations',
	templateUrl: './reservations.component.html',
	styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
	private _events: Array<any> = []

	constructor(private serviceCalendar: CalendarService) {}
	public get events(): Array<any> {
		return this._events
	}

	ngOnInit(): void {
		console.log(this.serviceCalendar.getOrderedCalendar('reservation'))
	}

	dateEvent(getDate: string, type: string) {
		return this.serviceCalendar.dateEvent(getDate, type)
	}

	formData = [
		{
			id: 'name',
			label: 'Nombre',
			type: 'text',
		},
		{
			id: 'lastname',
			label: 'Apellido',
			type: 'text',
		},
		{
			id: 'email',
			label: 'E-mail',
			type: 'email',
		},
	]

	days = ['Viernes', 'Sábado', 'Domingo']
}
