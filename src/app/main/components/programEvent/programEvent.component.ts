import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-programEvent',
	templateUrl: './programEvent.component.html',
	styleUrls: ['./programEvent.component.css'],
})
export class ProgramEventComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	menu = [
		{
			title: 'Seminario',
			icon: 'fas fa-university',
		},
		{
			title: 'Conferencias',
			icon: 'fas fa-comment',
		},
		{
			title: 'Talleres',
			icon: 'fa fa-code',
		},
	]

	eventData = [
		{
			title: 'Diseño UI y UX para móviles',
			hour: '10:00:00',
			date: '2016-12-09',
			name: 'Susan Sanchez',
		},
		{
			title: 'Aprende a Programar en una mañana',
			hour: '10:00:00',
			date: '2016-12-09',
			name: 'Gregorio Sanchez',
		},
	]
}
