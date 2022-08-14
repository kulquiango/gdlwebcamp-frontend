import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MainRoutingModule } from './main-routing.module'
import { HomeComponent } from './pages/home/home.component'
import { HeaderComponent } from './components/header/header.component'
import { MainComponent } from './components/main/main.component'
import { FooterComponent } from './components/footer/footer.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { CounterComponent } from './components/counter/counter.component'
import { PricesComponent } from './components/prices/prices.component'
import { GuestsComponent } from './components/guests/guests.component'
import { CalendarComponent } from './pages/calendar/calendar.component'
import { GuestsPagesComponent } from './pages/guests-pages/guests-pages.component'
import { ConferencePageComponent } from './pages/conference-page/conference-page.component'
import { InfoConferenceComponent } from './components/info-conference/info-conference.component'

import { ReservationsComponent } from './pages/reservations/reservations.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MapComponent } from './components/map/map.component'
import { CounterDaysComponent } from './components/counter-days/counter-days.component'
import { ProgramEventComponent } from './components/programEvent/programEvent.component'

@NgModule({
	imports: [CommonModule, MainRoutingModule, ReactiveFormsModule],
	declarations: [
		HomeComponent,
		HeaderComponent,
		MainComponent,
		FooterComponent,
		TestimonialsComponent,
		CounterComponent,
		PricesComponent,
		GuestsComponent,
		CalendarComponent,
		GuestsPagesComponent,
		ConferencePageComponent,
		InfoConferenceComponent,
		ReservationsComponent,
		MapComponent,
		CounterDaysComponent,
		ProgramEventComponent,
	],
	exports: [HomeComponent],
})
export class MainModule {}
