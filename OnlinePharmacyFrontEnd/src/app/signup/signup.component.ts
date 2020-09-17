import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { User } from './user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user:string='Doctor';
  public url1 = 'http://127.0.0.1:8000/backend/place';
  public url2 = 'http://127.0.0.1:8000/backend/qualification';
  public url3 = 'http://127.0.0.1:8000/backend/speciality';

  private http:HttpClient;
  public studrecords:Place[]=[];
  public qualificationrecords:Qualification[]=[];
  public specialityrecords:Speciality[]=[];

  public doctorForm:Doctor = new Doctor();


  public signinsuccess:boolean=false;


  constructor(http:HttpClient) {

   this.http=http;
   this.getQualification();
   this.getPlace();   
   this.getSpeciality();

   console.log(this.qualificationrecords);
   console.log(this.specialityrecords);
  }

  onSubmit()
  {
    console.log(this.doctorForm);

      return this.http.post<any>('http://127.0.0.1:8000/backend/savedoctor/',this.doctorForm,{responseType:"json"}).
      subscribe(data=> console.log("Success",data),
                error=> console.log("Error!",error)
        );
  }
  
  getPlace()
  {
    this.http.get(this.url1).toPromise().then(rec=>{
      
        
        for(var i=1;i<=Object.keys(rec.data).length;i++)
        {
          this.studrecords.push(new Place(rec.data[i].placeid,rec.data[i].placename));
         
        }
       
    })
  }

  getQualification()
  {
    this.http.get(this.url2).toPromise().then(rec=>{
     
        
      for(var i=1;i<=Object.keys(rec.data).length;i++)
      {
        this.qualificationrecords.push(new Qualification(rec.data[i].qualificationid,rec.data[i].qualification));
       
      }
     
  });  
  }

  getSpeciality()
  {
    this.http.get(this.url3).toPromise().then(rec=>{
     
        
        for(var i=1;i<=Object.keys(rec.data).length;i++)
        {
          this.specialityrecords.push(new Speciality(rec.data[i].specialityid,rec.data[i].speciality));
         
        }
       
    });    
  }

  ngOnInit() {
  }

  onChange(val)
  {
    this.user=val;
  }

  public checkSignIn(){
    
  }

}


export class Place
{
  placeid:number;
  placename:string;

  constructor(placeid:number,placename:string)
  {
    this.placeid=placeid;
    this.placename=placename;
  }
}

export class Qualification
{
  qualificationid:number;
  qualification:string;

  constructor(qualificationid:number,qualification:string)
  {
    this.qualificationid=qualificationid;
    this.qualification=qualification;
  }
}

export class Speciality
{
  specialityid:number;
  speciality:string;

  constructor(specialityid:number,speciality:string)
  {
    this.specialityid = specialityid;
    this.speciality = speciality;
  }
}