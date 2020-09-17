import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards2',
  templateUrl: './cards2.component.html',
  styleUrls: ['./cards2.component.css']
})
export class Cards2Component implements OnInit {
   
  pagetitle:String
  pagedesc:String
  services:any

  constructor() { 
    this.pagetitle="Affordable full body health checkups"
    this.pagedesc="Free home sample collection for all health checkups"
    this.services=[
    {
      id:1,
      servicename:'Comprehensive Young Indian Health Checkup',
      desc:'Ideal for male aged 21 to 40 years' ,
      imgname:'ccheckup.jpg',
      disc:'24% off',
      link:'Explore >'
    },{
      id:2,
      servicename:"Young Indian Active Health Checkup",
      desc:'Ideal for male aged 21 to 40 years',
      imgname:'youngcheckup.jpg',
      disc:'45% off',
      link:'Explore >'},
      {
      id:3,
      servicename:'Active Profesional Health Checkup',
      desc:'Ideal for individual aged 41 to 60 years',
      imgname:'connect.jpg',
      disc:'17% off',
      link:'Explore >'
      },
      {
        id:4,
        servicename:'Comprehensive Active Profesional Checkup',
        desc:'Ideal for individual aged 41 to 60 years',
        imgname:'checkup2.jpg',
        disc:'29% off',
        link:'Explore >'
        }];
    
  
    
    

  }

  ngOnInit() {
  }

}
