import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FloatingimageComponent } from './floatingimage/floatingimage.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { CardsComponent } from './cards/cards.component';
import { Cards2Component } from './cards2/cards2.component';
import { ArticlesComponent } from './articles/articles.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Card1Component } from './card1/card1.component';
import { ShowdoctorsComponent } from './showdoctors/showdoctors.component';
import { ShowarticlesComponent } from './showarticles/showarticles.component';
import { ShowdiagnosticsComponent } from './showdiagnostics/showdiagnostics.component';
import { Cards1Component } from './showdiagnostics/cards1/cards1.component';
import { ShowtestsComponent } from './showdiagnostics/showtests/showtests.component';
import { Diagnocards2Component } from './showdiagnostics/diagnocards2/diagnocards2.component';
import { Diagnocards3Component } from './showdiagnostics/diagnocards3/diagnocards3.component';
import { DiagnofooterComponent } from './showdiagnostics/diagnofooter/diagnofooter.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FloatingimageComponent,
    LoginComponent,
    SignupComponent,
    PatientComponent,
    CardsComponent,
    Cards2Component,
    ArticlesComponent,
    FeedbackComponent,
    Card1Component,
    ShowdoctorsComponent,
    ShowarticlesComponent,
    ShowdiagnosticsComponent,
    Cards1Component,
    ShowtestsComponent,
    Diagnocards2Component,
    Diagnocards3Component,
    DiagnofooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
