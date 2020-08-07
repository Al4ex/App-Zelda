import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.page.html',
  styleUrls: ['./heart.page.scss'],
})
export class HeartPage implements OnInit {

  slides = [
    {
      img: 'assets/img/a.png'
    },
    {
      img: 'assets/img/b.png'
    },
    {
      img: 'assets/img/c.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
