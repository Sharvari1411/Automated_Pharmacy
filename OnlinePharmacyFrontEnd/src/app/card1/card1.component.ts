import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
  pagetitle:String;
  pagedesc:String;
  services:any;

  constructor(private router:Router) { 

    this.pagetitle="Find and book doctors in top specialties"
    this.pagedesc="Book a doctor appointment for an in-clinic consultation"

    this.services=[
    {
      id:1,
      servicename:'Dentist',
      desc:'Teething troubles?Schedule a dental checkup' ,
      imgname:'dentist.jpg'
      
    },
    {
      id:2,
      servicename:"Gynecologist",
      desc:"Explore for woman's health,pregnancy and infertility treatments",
      imgname:'gynacologist.jpg'
      },
      {
      id:3,
      servicename:'Dietician/Nutrition',
      desc:'Get guidance on eating right,weight management and sports nutrition',
      imgname:'dietician.jpg'
      },
      {
        id:4,
        servicename:'Physiotherapist',
        desc:'Pulled a muscle? Get it treated by a trained physiotherapist',
        imgname:'physiotherapist.jpg'
      },
       {
        id:5,
        servicename:'Orthopedist',
        desc:'For bone and joint muscles Spinal injuries and more..',
        imgname:'orthopedist.jpg'
       },
         {
        id:6,
        servicename:'General Surgeon',
        desc:'Need to get operated? Find The right surgeon',
        imgname:'surgeon.jpg',
       },
       {
        id:7,
        servicename:'Pediatrician',
        desc:'Child specialist and doctors for infant',
        imgname:'pediatrician.jpg'
       },
       {
        id:8,
        servicename:'General Physician',
        desc:'Find the right family doctor in your neighbourhood',
        imgname:'physician.jpg'
       },
       {
        id:9,
        servicename:'Laproscopy',
        desc:'Find the right family doctor in your neighbourhood',
        imgname:'laproscopy.jpg'
       },
       {
        id:10,
        servicename:'Gastroenterologist',
        desc:'Find the right family doctor in your neighbourhood',
        imgname:'gastro.jpg'
       }
       
       ];
    
  

  }

  ngOnInit() {
  }

  openPage(parameter)
  {
    console.log("parameter = " + parameter);
    this.router.navigate(['showdoctors/',parameter]);
  }
}
