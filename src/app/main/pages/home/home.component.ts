import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	socialNetworks = [
		{ icon: 'fab fa-facebook-square' },
		{ icon: 'fab fa-twitter' },
		{ icon: 'fab fa-pinterest' },
		{ icon: 'fab fa-youtube' },
		{ icon: 'fab fa-instagram' },
	]
}
