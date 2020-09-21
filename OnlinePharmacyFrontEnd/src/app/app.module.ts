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
import { AllArtComponent } from './all-art/all-art.component';
import { ArticlesdescriptionComponent } from './articlesdescription/articlesdescription.component';
import { ExercisearticleComponent } from './exercisearticle/exercisearticle.component';
import { FoodComponent } from './food/food.component';
import { SkinarticleComponent } from './skinarticle/skinarticle.component';
import { HairarticleComponent } from './hairarticle/hairarticle.component';
import { FatComponent } from './fat/fat.component';
import { FooterComponent } from './footer/footer.component';
import { SkincareProductsComponent } from './skincare-products/skincare-products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SkincareProductsListComponent } from './skincare-products-list/skincare-products-list.component';
import { OilatumSoapdesComponent } from './oilatum-soapdes/oilatum-soapdes.component';
import { DermadewSoapdesComponent } from './dermadew-soapdes/dermadew-soapdes.component';
import { NusoftSoapdesComponent } from './nusoft-soapdes/nusoft-soapdes.component';
import { EdewSoapdesComponent } from './edew-soapdes/edew-soapdes.component';
import { NiveaSoapdesComponent } from './nivea-soapdes/nivea-soapdes.component';
import { JacoildesComponent } from './jacoildes/jacoildes.component';
import { FamilyCareProductsListComponent } from './family-care-products-list/family-care-products-list.component';
import { ApollodesComponent } from './apollodes/apollodes.component';
import { VWashdesComponent } from './vwashdes/vwashdes.component';
import { MenoprodesComponent } from './menoprodes/menoprodes.component';
import { FitnessProductsListComponent } from './fitness-products-list/fitness-products-list.component';
import { BProtindesComponent } from './bprotindes/bprotindes.component';
import { EnduradesComponent } from './endurades/endurades.component';
import { MannadesComponent } from './mannades/mannades.component';
import { PaincareProductsListComponent } from './paincare-products-list/paincare-products-list.component';
import { ArlinComponent } from './arlin/arlin.component';
import { ViopatchComponent } from './viopatch/viopatch.component';
import { PainrelifComponent } from './painrelif/painrelif.component';
import { AmrutanjanComponent } from './amrutanjan/amrutanjan.component';
import { MyovedicComponent } from './myovedic/myovedic.component';
import { ApolloPainComponent } from './apollo-pain/apollo-pain.component';
import { WeightcareProductsListComponent } from './weightcare-products-list/weightcare-products-list.component';
import { NutrixComponent } from './nutrix/nutrix.component';
import { HimalayaComponent } from './himalaya/himalaya.component';
import { CurevedaComponent } from './cureveda/cureveda.component';
import { WeightNoComponent } from './weight-no/weight-no.component';
import { OzivaComponent } from './oziva/oziva.component';
import { GNCComponent } from './gnc/gnc.component';
import { FruitarticleComponent } from './fruitarticle/fruitarticle.component';
import { ClimatearticleComponent } from './climatearticle/climatearticle.component';
import { TedibarComponent } from './tedibar/tedibar.component';





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
    DiagnofooterComponent,
    AllArtComponent,
    ArticlesdescriptionComponent,
    ExercisearticleComponent,
    FoodComponent,
    SkinarticleComponent,
    HairarticleComponent,
    FatComponent,
    FooterComponent,
    SkincareProductsComponent,
    AllProductsComponent,
    SkincareProductsListComponent,
    OilatumSoapdesComponent,
    DermadewSoapdesComponent,
    NusoftSoapdesComponent,
    EdewSoapdesComponent,
    NiveaSoapdesComponent,
    JacoildesComponent,
    FamilyCareProductsListComponent,
    ApollodesComponent,
    VWashdesComponent,
    MenoprodesComponent,
    FitnessProductsListComponent,
    BProtindesComponent,
    EnduradesComponent,
    MannadesComponent,
    PaincareProductsListComponent,
    ArlinComponent,
    ViopatchComponent,
    PainrelifComponent,
    AmrutanjanComponent,
    MyovedicComponent,
    ApolloPainComponent,
    WeightcareProductsListComponent,
    NutrixComponent,
    HimalayaComponent,
    CurevedaComponent,
    WeightNoComponent,
    OzivaComponent,
    GNCComponent,
    FruitarticleComponent,
    ClimatearticleComponent,
    TedibarComponent
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
