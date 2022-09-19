import { Component, OnInit } from '@angular/core'

import { CalendarService } from '../../../service/calendar.service'

@Component({
	selector: 'app-reservations',
	templateUrl: './reservations.component.html',
	styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
	public ticket = 0
	private ticketDayOne: boolean = false
	private ticketDaytwo: boolean = false
	private ticketDaythree: boolean = false
	private _events: Array<any> = []

	constructor(private serviceCalendar: CalendarService) {}
	public get events(): Array<any> {
		return this._events
	}

	ngOnInit(): void {
		this._events = this.serviceCalendar.orderedEvents
	}
	eventsCheckbox: any = {}
	dateEvent(getDate: string, type: string) {
		return this.serviceCalendar.dateEvent(getDate, type)
	}

	readTickets(e: any) {
		console.log(this.eventsCheckbox)
		e.passForOneDay = e.passForOneDay === null ? 0 : e.passForOneDay
		e.passForTwoDays = e.passForTwoDays === null ? 0 : e.passForTwoDays
		e.passEveryDay = e.passEveryDay === null ? 0 : e.passEveryDay

		if (e.passForOneDay > 0) {
			this.ticketDayOne = true
			this.ticketDaytwo = false
			this.ticketDaythree = false
			this.buyTicket()
		}
		if (e.passForTwoDays > 0) {
			this.ticketDayOne = false
			this.ticketDaytwo = true
			this.ticketDaythree = false
			this.buyTicket()
		}
		if (e.passEveryDay > 0) {
			this.ticketDayOne = false
			this.ticketDaytwo = false
			this.ticketDaythree = true
			this.buyTicket()
		}
		if (e.passForOneDay === 0 && e.passForTwoDays === 0 && e.passEveryDay === 0) {
			this.ticketDayOne = false
			this.ticketDaytwo = false
			this.ticketDaythree = false
			this.ticket = 0
			this.buyTicket()
		}
	}
	private buyTicket() {
		if (this.ticketDayOne) {
			this.ticket = 1
		} else if (this.ticketDaytwo) {
			this.ticket = 2
		} else if (this.ticketDaythree) {
			this.ticket = 3
		}
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
