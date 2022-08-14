import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-counter-days',
	templateUrl: './counter-days.component.html',
	styleUrls: ['./counter-days.component.css'],
})
export class CounterDaysComponent implements OnInit {
	private _seconds: number = 0

	private _minute: number = 0

	private _hour: number = 0

	private _day: number = 0

	public get seconds(): number {
		return this._seconds
	}
	public get minute(): number {
		return this._minute
	}
	public get hour(): number {
		return this._hour
	}
	public get day(): number {
		return this._day
	}
	constructor() {}
	ngOnInit(): void {
		this.countDown('Apr 14 2023 16:10:55 GMT-0500 (hora estándar de Colombia')
	}

	private getTimeLeft(timeLeft: string): any {
		let currentTime: any = new Date(),
			timeUser: any = new Date(timeLeft),
			totalTimeRemaining = (timeUser - currentTime + 1000) / 1000,
			secondsRemaining = ('0' + Math.floor(totalTimeRemaining % 60)).slice(-2),
			minuteRemaining = ('0' + Math.floor((totalTimeRemaining / 60) % 60)).slice(-2),
			hourRemaining = ('0' + Math.floor((totalTimeRemaining / 3000) % 24)).slice(-2),
			daysRemaining = Math.floor(totalTimeRemaining / (3600 * 24))

		return {
			totalTimeRemaining,
			secondsRemaining,
			minuteRemaining,
			hourRemaining,
			daysRemaining,
		}
	}

	private countDown(timeUser: string) {
		const timerUpdate = setInterval(() => {
			let { totalTimeRemaining, secondsRemaining, minuteRemaining, hourRemaining, daysRemaining } =
				this.getTimeLeft(timeUser)

			if (totalTimeRemaining <= 1) {
				clearInterval(timerUpdate)
			}
			this._seconds = secondsRemaining
			this._minute = minuteRemaining
			this._hour = hourRemaining
			this._day = daysRemaining
		}, 1000)
	}
}
