import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards1',
  templateUrl: './cards1.component.html',
  styleUrls: ['./cards1.component.css']
})
export class Cards1Component implements OnInit {

  pagetitle:string;
  services:any;
  services1:any;
  constructor() {
    this.pagetitle="Top Booked Diagnostic Tests",
    this.services=[
      {
        id:1,
        servicename:'Thyroid Profile',
        desc:'Known as Thyroid Profile Total Blood',
        amnt:'400'
      },{
        id:2,
        servicename:'Complete Blood Count',
        desc:'Known as Count Automated Blood',
        amnt:'300'
      },
      {
      id:3,
        servicename:'Lipid Profile',
        desc:'Known as Lipid Profile  Blood',
        amnt:'400'
      },
      {
      id:4,
        servicename:'Liver Function Test',
        desc:'Known as Liver Function Tests Blood',
        amnt:'400'
      },
      {
      id:5,
        servicename:'Dengue NS1',
        desc:'Known as Dengue Ns1 Antigen Pcr Blood',
        amnt:'500'
      },
      {
        id:6,
        servicename:'Malarial Antigen',
        desc:'Known as Malarial Antigen Pcr Blood',
        amnt:'200'
      }];
      this.services1=[
      {
        id:7,
        servicename:'Hba1c',
        desc:'Known as Glycosylated Haemoglobin Blood',
        amnt:'300'
      },
      {
        id:8,
        servicename:'Vitamin B12',
        desc:'Known as vitamin B12 Conventional Blood',
        amnt:'400'
      },
      {
        id:9,
        servicename:'Pregnanacy Test',
        desc:'Known as Beta Hcg Automated Blood',
        amnt:'400'
      },
      {
        id:10,
        servicename:'Fasting Blood Sugar',
        desc:'Known as Glucose Fasting Blood',
        amnt:'150'
      },
      {
        id:11,
        servicename:'Vitamin D Profile',
        desc:'Known as Vitamin D Profile Blood',
        amnt:'1000'
      },
      {
        id:12,
        servicename:'Triple Marker Test',
        desc:'Known as Triple Marker Test Blood',
        amnt:'2000'
      }];
 


   }

  ngOnInit() {
  }

}
