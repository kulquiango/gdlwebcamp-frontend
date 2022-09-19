import { Component, OnInit } from '@angular/core'
import { from } from 'rxjs'
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog'
import { CrudEventService } from 'src/app/service/crudEvent.service'
import { CalendarService } from '../../../service/calendar.service'

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
	public events: Array<any> = []

	constructor(private calendarService: CalendarService) {}

	ngOnInit(): void {
		this.events = this.calendarService.orderedCalendar
	}

	dateEvent(data: string, type: string) {
		return this.calendarService.dateEvent(data, type)
	}

	formatDate(date: string) {
		return this.calendarService.formatDate(date)
	}
}
