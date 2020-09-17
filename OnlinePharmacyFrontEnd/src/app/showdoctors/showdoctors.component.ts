import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { Doctor } from '../showdoctors/doctor';
import { DoctorserviceService } from './doctorservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showdoctors',
  templateUrl: './showdoctors.component.html',
  styleUrls: ['./showdoctors.component.css']
})
export class ShowdoctorsComponent implements OnInit {

  public doctorArray:Doctor[] = [];
  public queryParam:string = "";

  constructor(private http:HttpClient,private doctorService:DoctorserviceService,private route:ActivatedRoute){
  
  }


  getDoctors()
  {
    this.queryParam=this.route.snapshot.paramMap.get('queryParam');
    console.log("Query Parameter = " + this.queryParam);

    this.doctorService.getAllDoctorsFromBackend().subscribe(
      (data1)=>{
        console.log("Console Data is ");
        

        let arrayData = Object.keys(data1["rec"]);

        for(var key of arrayData)
        {
          this.doctorArray.push(
            new Doctor(
              data1["rec"][key]["fullname"],
              data1["rec"][key]["contactno"],
              data1["rec"][key]["placename"],
              data1["rec"][key]["speciality"],
              data1["rec"][key]["qualification"],
              data1["rec"][key]["experience"]
            )
          );
        }
      }

      

    );

    console.log("Total Dotors Subscried = " + this.doctorArray.length);
    console.log("Doctors Array Data = ");
    console.log(JSON.stringify(this.doctorArray));
  }

  ngOnInit(): void {
  }

}

