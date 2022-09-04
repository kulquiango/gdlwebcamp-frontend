import { Injectable } from '@angular/core'
import { orderByElement } from '../utils/orderByElement'
import { CrudEventService } from './crudEvent.service'

@Injectable({
	providedIn: 'root',
})
export class CalendarService {
	private _orderedCalendar: Array<any> = []
	private temporalArray: any = []
	constructor(private crudCalendarService: CrudEventService) {
		this.crudCalendarService.read().subscribe(({ data }) => {
			this.orderDate(data)
		})
	}
	orderDate(data: Array<any>) {
		let dataReq = orderByElement(data)

		dataReq.forEach((element) => {
			this.orderedCalendar.push(element)
		})
	}

	public get orderedCalendar(): Array<any> {
		return this._orderedCalendar
	}

	dateEvent(getDate: string, type: string) {
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
				day = 'Miércoles'
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

		let dateReturn
		if (type === 'complete') {
			dateReturn = `${day}, ${dayDate} de ${month} de ${yearDate}`
		} else if (type === 'day') {
			dateReturn = day
		}
		return dateReturn
	}

	formatDate(date: string) {
		return date.substring(0, 10)
	}
}
