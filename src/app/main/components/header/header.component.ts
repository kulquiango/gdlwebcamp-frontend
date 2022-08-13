import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  menuNavigation = [
    {
      name: 'Conferencias',
      url: '/conferences',
    },
    {
      name: 'Calendario',
      url: '/calendar',
    },
    {
      name: 'Invitados',
      url: '/guests',
    },
    {
      name: 'Reservaciones',
      url: '/reservations',
    },
  ];
}
