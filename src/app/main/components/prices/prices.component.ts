import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
	selector: 'app-prices',
	templateUrl: './prices.component.html',
	styleUrls: ['./prices.component.css'],
})
export class PricesComponent implements OnInit {
	@Input() classHover: string = ''
	@Input() isReservation: boolean = false
	@Output() ticket = new EventEmitter<any>()

	constructor() {}

	ngOnInit(): void {}
	tickets: any = {
		passForOneDay: 0,
		passEveryDay: 0,
		passForTwoDays: 0,
	}
	onKeyUpEvent(event: any) {
		this.ticket.emit(this.tickets)
	}
	cards = [
		{
			title: 'Pase por día',
			price: '$30',
			name: 'passForOneDay',
		},
		{
			title: 'Todos los días',
			price: '$50',
			name: 'passEveryDay',
		},
		{
			title: 'Pase dos día',
			price: '$45',
			name: 'passForTwoDays',
		},
	]
}
