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
      url: 'assets/images/guests/invitado1.jpg',
    },
    {
      name: 'Sharu Herrera',
      url: 'assets/images/guests/invitado2.jpg',
    },
    {
      name: 'Gregorio Sanchez',
      url: 'assets/images/guests/invitado3.jpg',
    },
    {
      name: 'Susana Rivera',
      url: 'assets/images/guests/invitado4.jpg',
    },
    {
      name: 'Harold Garcia',
      url: 'assets/images/guests/invitado5.jpg',
    },
    {
      name: 'Susana Sanchez',
      url: 'assets/images/guests/invitado6.jpg',
    },
  ];
}
