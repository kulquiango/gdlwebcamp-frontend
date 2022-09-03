import { Component, OnInit } from '@angular/core'
import { from } from 'rxjs'
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog'
import { CrudEventService } from 'src/app/service/crudEvent.service'

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
	public events: Array<any> = []
	public orderedCalendar: Array<any> = []
	private temporalArray: any = []
	constructor(private calendarService: CrudEventService) {}

	ngOnInit(): void {
		this.calendarService.read().subscribe(({ data }) => {
			for (let i = 0; i < data.length - 1; i++) {
				if (data[i].date === data[i + 1].date) {
					this.temporalArray.push(data[i])
				} else {
					this.addArray(this.temporalArray, data, i)
				}
			}

			if (data[data.length - 1].date === data[data.length - 2].date) {
				this.temporalArray.push(data[data.length - 1])
			} else {
				this.addArray(this.temporalArray, data, data.length - 1)
			}

			this.orderedCalendar.push(this.temporalArray)
			this.events = this.orderedCalendar
			console.log(this.events)
		})
	}

	addArray(temporalArray: Array<any>, data: any, position: number) {
		this.orderedCalendar.push(temporalArray)
		this.temporalArray = []
		temporalArray.push(data[position])
	}

	formatDate(date: string) {
		return date.substring(0, 10)
	}

	dateEvent(getDate: string) {
		const date = new Date(getDate).getDay()
		const dayDate = new Date(getDate).getUTCDate()
		const monthDate = new Date(getDate).getMonth()
		const yearDate = new Date(getDate).getFullYear()
		let day
		let month
		switch (date) {
			case 0:
				day = 'Lunes'
				break
			case 1:
				day = 'Martes'
				break
			case 2:
				day = 'Miercoles'
				break
			case 3:
				day = 'Jueves'
				break
			case 4:
				day = 'Viernes'
				break
			case 5:
				day = 'Sábado'
				break
			case 6:
				day = 'Domingo'
				break
		}

		switch (monthDate) {
			case 0:
				month = 'Enero'
				break
			case 1:
				month = 'Febrero'
				break
			case 2:
				month = 'Marzo'
				break
			case 3:
				month = 'Abril'
				break
			case 4:
				month = 'Mayo'
				break
			case 5:
				month = 'Junio'
				break
			case 6:
				month = 'Julio'
				break
			case 7:
				month = 'Agosto'
				break
			case 8:
				month = 'Septiembre'
				break
			case 9:
				month = 'Octubre'
				break
			case 10:
				month = 'Noviembre'
				break
			case 11:
				month = 'Diciembre'
				break
		}
		console.log(new Date(getDate).toUTCString())
		return `${day}, ${dayDate} de ${month} de ${yearDate}`
	}
}
