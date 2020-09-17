import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  services:any;
  constructor() {
    this.services=[
      {
        id:1,
        servicename:'VITAMINS AND SUPPLEMENTS',
        desc:'5 Fruits To Boost Your Health',
        doc:'Ms. Swati Kapoor'},
        {
          id:2,
          servicename:'EVERYDAY FITNESS',
          desc:'Health Tips To Deal With Climate Change',
          doc:'Dr. Snehal Sardesai-Singh'


    }]
   }

  ngOnInit() {
  }

}
