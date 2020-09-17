import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  pagetitle:string
    pagedesc:string
    services:any
    

  constructor() {
    this.pagetitle="Top Deals and Offers"
    this.pagedesc="Hand-picked deals for a healthier you"
    
  this.services=[
      {
        id:1,
        servicename:'Health Checkups @Home Starting just at',
        price:999,
        imgname:'healthcheckup.jpg',
        link:'Buy Now >'
      },{
        id:2,
        servicename:'Chat with doctors with all specialities @',
        price:999,
        imgname:'chat.jpg',
        link:'Chat Now >'},
        {
        id:3,
        servicename:'Unlimited Online consultations starting @',
        price:999,
        imgname:'connect.jpg',
        link:'Buy Now >'
        },
        {
          id:4,
          servicename:'Upto 20% off on medicines of',
          price:999,
          imgname:'medicines.jpg',
          link:'Order Now >'
          }];
      
    
    




   }

  ngOnInit() {
  }

}
