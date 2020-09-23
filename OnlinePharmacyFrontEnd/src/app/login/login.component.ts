import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private http: HttpClient;
  url = 'http://127.0.0.1:8000/backend/userdata/';
  url2 = "http://127.0.0.1:8000/backend/doctordata/"

  public users: User[] = [];
  public doctordata: DoctorData[] = [];

  @Input() public patientobj: User;
  public doctorobj: DoctorData;

  public logindata: LoginAccount = new LoginAccount('', '');
  public failedlogin: boolean = false;
  public successlogin: boolean = false;

  public status: boolean = false;
  public usertype: string;


  constructor(http: HttpClient=null, public router: Router=null) {
    this.http = http;
    this.http.get(this.url).toPromise().then(rec => {


      for (var i = 1; i <= Object.keys(rec.data).length; i++) {
        this.users.push(new User(
          rec.data[i].UserId,
          rec.data[i].Fname,
          rec.data[i].Mname,
          rec.data[i].Lname,
          rec.data[i].Gender,
          rec.data[i].Username,
          rec.data[i].Password,
          rec.data[i].Emailid,
          rec.data[i].Contactno,
          rec.data[i].FkPlaceId));


      }

    });

    this.http.get(this.url2).toPromise().then(rec => {


      for (var i = 1; i <= Object.keys(rec.data).length; i++) {
        this.doctordata.push(new DoctorData(
          rec.data[i].doctorid,
          rec.data[i].fname,
          rec.data[i].mname,
          rec.data[i].lname,
          rec.data[i].gender,
          rec.data[i].place_name,
          rec.data[i].qualification,
          rec.data[i].speciality,
          rec.data[i].username,
          rec.data[i].password,
          rec.data[i].emailid,
          rec.data[i].contactno,
          rec.data[i].status));

      }

    })

  }

  onChange(evt) {
    var target = evt.target;
    if (target.checked && target.value == "Doctor")
      this.usertype = "Doctor";
    else if (target.checked && target.value == "Patient")
      this.usertype = "Patient";

    console.log("User Type = " + this.usertype);
  }

  linkLink() {
    if (this.usertype == "Doctor") {
      this.router.navigateByUrl('/prescribe');
    }
    else if (this.usertype == "Patient") {
      let data=JSON.stringify(this.patientobj);
      console.log(data);

      let navigationExtras: NavigationExtras = {
        queryParams: {
            patientdata: data
        }
    }      
      this.router.navigate(['/prescribe'], navigationExtras)
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.status = false;
    console.log("user type=" + this.usertype);
    if (this.usertype == "Patient") {
      console.log("Inside Patient loop");

      for (var i = 0; i < this.users.length; i++) {
        if (this.logindata.username == this.users[i].username && this.logindata.password == this.users[i].password) {
          this.status = true;
          this.patientobj = this.users[i];
        }
      }

    }
    else if (this.usertype == "Doctor") {
      console.log("Inside Doctor loop");
      for (var i = 0; i < this.doctordata.length; i++) {
        if (this.logindata.username == this.doctordata[i].username && this.logindata.password == this.doctordata[i].password) {
          this.status = true;
          this.doctorobj = this.doctordata[i];
        }
      }
    }

    console.log("Status -> " + this.status);
    if (this.status == true) {
      this.successlogin = true;
      this.failedlogin = false;
    }
    else {
      this.failedlogin = true;
      this.successlogin = false;
    }
  }

}


export class User {
  constructor(
    public userid: number = -1,
    public fname: string = '',
    public mname: string = '',
    public lname: string = '',
    public gender: string = "",
    public username: string = "",
    public password: string = "",
    public emailid: string = "",
    public contactno: string = "",
    public fkplaceid: number = 1) { }
}

class LoginAccount {
  public username: string;
  public password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

class DoctorData {
  constructor(
    public doctorid: number,
    public fname: string,
    public mname: string,
    public lname: string,
    public gender: string,
    public place_name: string,
    public qualification: string,
    public speciality: string,
    public username: string,
    public password: string,
    public emailid: string,
    public contactno: string,
    public status: string
  ) {

  }
}