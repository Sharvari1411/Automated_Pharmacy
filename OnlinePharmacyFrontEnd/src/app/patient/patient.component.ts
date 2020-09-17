import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginComponent, User } from '../login/login.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  public info:any;

  constructor(public router:Router,http: HttpClient,public rout:ActivatedRoute) { 

  }

  ngOnInit() {
    this.rout.data.subscribe(x=>{
      this.info=x;
    }); 
    console.log(this.info);
  }

}
