import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conference-page',
  templateUrl: './conference-page.component.html',
  styleUrls: ['./conference-page.component.css'],
})
export class ConferencePageComponent implements OnInit {
  constructor() {}
  private path: string = 'assets/img/galery/';

  getPath() {
    return this.path;
  }

  ngOnInit(): void {}

  galery = [
    {
      name: 'img1',
      url: '01.jpg',
    },
    {
      name: 'img2',
      url: '02.jpg',
    },
    {
      name: 'img3',
      url: '03.jpg',
    },
    {
      name: 'img4',
      url: '04.jpg',
    },
    {
      name: 'img5',
      url: '05.jpg',
    },
    {
      name: 'img6',
      url: '06.jpg',
    },
    {
      name: 'img7',
      url: '07.jpg',
    },
    {
      name: 'img8',
      url: '08.jpg',
    },
    {
      name: 'img9',
      url: '09.jpg',
    },
    {
      name: 'img10',
      url: '10.jpg',
    },
    {
      name: 'img11',
      url: '11.jpg',
    },
    {
      name: 'img12',
      url: '12.jpg',
    },
    {
      name: 'img13',
      url: '13.jpg',
    },
    {
      name: 'img14',
      url: '14.jpg',
    },
    {
      name: 'img15',
      url: '15.jpg',
    },
    {
      name: 'img16',
      url: '16.jpg',
    },
    {
      name: 'img17',
      url: '17.jpg',
    },
    {
      name: 'img18',
      url: '18.jpg',
    },
    {
      name: 'img19',
      url: '19.jpg',
    },

    {
      name: 'im20',
      url: '20.jpg',
    },
    {
      name: 'img21',
      url: '21.jpg',
    },
  ];
}
