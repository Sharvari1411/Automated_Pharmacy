import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../showdoctors/doctor';
import { map,catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  private doctorURL = "http://localhost:8000/backend/doctors/"

  constructor(private httpClient:HttpClient) { }

  getAllDoctorsFromBackend(){
    return this.httpClient.get(this.doctorURL).pipe(
      map( (data1:Doctor[])=>{
        return data1;
      }),catchError(error=>{return error})

      );
  }
}
