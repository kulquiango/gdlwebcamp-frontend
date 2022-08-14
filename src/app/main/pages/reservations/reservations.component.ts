import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  formData = [
    {
      id: 'name',
      label: 'Nombre',
      type: 'text',
    },
    {
      id: 'lastname',
      label: 'Apellido',
      type: 'text',
    },
    {
      id: 'email',
      label: 'E-mail',
      type: 'email',
    },
  ];

  days=['Viernes','Sábado','Domingo']
}
