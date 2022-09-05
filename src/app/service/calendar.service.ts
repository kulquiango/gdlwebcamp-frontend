import { Injectable } from '@angular/core'
import { orderByElement } from '../utils/orderByElement'
import { CrudEventService } from './crudEvent.service'

@Injectable({
	providedIn: 'root',
})
export class CalendarService {
	private _orderedCalendar: Array<any> = []
	private _orderedReservation: Array<any> = []

	constructor(private crudCalendarService: CrudEventService) {
		this.crudCalendarService.read().subscribe(({ data }) => {
			let dataReq = orderByElement(data, 'date')

			dataReq.forEach((element) => {
				this._orderedCalendar.push(element)
			})
		})
	}

	public getOrderedCalendar(type: string): Array<any> {
		if (type === 'calendar') {
			return this._orderedCalendar
		} else {
			let data: Array<any> = []
			let events: Array<any> = []
			this._orderedCalendar.forEach((element) => {
				data.push(this.orderByCategory(element))
			})
			data.forEach((e) => {
				events.push(orderByElement(e, '_idCategory'))
			})

			return events
		}
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

	orderByHour(data: Array<any>) {
		data.sort((a, b) => {
			if (a.hour > b.hour) {
				return 1
			}
			if (a.hour < b.hour) {
				return -1
			}
			// a must be equal to b
			return 0
		})

		return data
	}

	orderByCategory(data: Array<any>) {
		data.sort((a, b) => {
			if (a._idCategory.category > b._idCategory.category) {
				return 1
			}
			if (a._idCategory.category < b._idCategory.category) {
				return -1
			}
			// a must be equal to b
			return 0
		})

		return data
	}
}
