import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cards = [
    {
      title: 'Pase por día',
      price: '$30',
    },
    {
      title: 'Todos los días',
      price: '$50',
    },
    {
      title: 'Pase por día',
      price: '$45',
    },
  ];
}
