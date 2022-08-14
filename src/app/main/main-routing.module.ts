import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';

import { HomeComponent } from './pages/home/home.component';
import { GuestsPagesComponent } from './pages/guests-pages/guests-pages.component';
import { ConferencePageComponent } from './pages/conference-page/conference-page.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'guests',
    component: GuestsPagesComponent,
  },
  {
    path: 'conferences',
    component: ConferencePageComponent,
  },
  {
    path: 'reservations',
    component: ReservationsComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
