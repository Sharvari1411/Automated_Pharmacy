import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FloatingimageComponent } from './floatingimage/floatingimage.component';
import { SignupComponent } from './signup/signup.component';
import { PatientComponent } from './patient/patient.component';
import {CardsComponent} from './cards/cards.component';
import { ShowdoctorsComponent } from './showdoctors/showdoctors.component';
import { ShowarticlesComponent } from './showarticles/showarticles.component';
import {ShowdiagnosticsComponent} from './showdiagnostics/showdiagnostics.component';
import {ShowtestsComponent} from './showdiagnostics/showtests/showtests.component';


const routes:Routes = [
  {path:'',redirectTo:'prescribe',pathMatch:'full'},
  {path:'prescribe',component:FloatingimageComponent},
  {path:'prescribe',component:CardsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'login/patientprofile',component:PatientComponent},
  //{path:'doctorprofile',component:DoctorComponent},
  {path:'showdoctors',component:ShowdoctorsComponent},
  {path:'showdoctors/:queryParam',component:ShowdoctorsComponent},
  {path:'showarticles',component:ShowarticlesComponent},
  {path:'showdiagnostics',component:ShowdiagnosticsComponent},
  {path:'showtests',component:ShowtestsComponent},
  {path:'**',redirectTo:'prescibe'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
