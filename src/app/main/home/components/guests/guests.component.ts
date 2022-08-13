import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css'],
})
export class GuestsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  guests = [
    {
      name: 'Rafael Bautista',
      url: 'assets/img/guests/invitado1.jpg',
    },
    {
      name: 'Sharu Herrera',
      url: 'assets/img/guests/invitado2.jpg',
    },
    {
      name: 'Gregorio Sanchez',
      url: 'assets/img/guests/invitado3.jpg',
    },
    {
      name: 'Susana Rivera',
      url: 'assets/img/guests/invitado4.jpg',
    },
    {
      name: 'Harold Garcia',
      url: 'assets/img/guests/invitado5.jpg',
    },
    {
      name: 'Susana Sanchez',
      url: 'assets/img/guests/invitado6.jpg',
    },
  ];
}
