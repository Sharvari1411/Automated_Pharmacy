import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FloatingimageComponent } from './floatingimage/floatingimage.component';
import { SignupComponent } from './signup/signup.component';
import { PatientComponent } from './patient/patient.component';
import {CardsComponent} from './cards/cards.component';
import { ShowdoctorsComponent } from './showdoctors/showdoctors.component';
import {ShowdiagnosticsComponent} from './showdiagnostics/showdiagnostics.component';
import {ShowtestsComponent} from './showdiagnostics/showtests/showtests.component';
import { AllArtComponent } from './all-art/all-art.component';
import { ArticlesdescriptionComponent } from './articlesdescription/articlesdescription.component';
import { ExercisearticleComponent } from './exercisearticle/exercisearticle.component';
import { FoodComponent } from './food/food.component';
import { SkinarticleComponent } from './skinarticle/skinarticle.component';
import { HairarticleComponent } from './hairarticle/hairarticle.component';
import { FatComponent } from './fat/fat.component';
import { SkincareProductsListComponent } from './skincare-products-list/skincare-products-list.component';
import { AllProductsComponent } from './all-products/all-products.component';
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
import { TedibarComponent } from './tedibar/tedibar.component';
import { FruitarticleComponent } from './fruitarticle/fruitarticle.component';
import { ClimatearticleComponent } from './climatearticle/climatearticle.component';
import { SearchComponent } from './search/search.component';




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
  {path:'showdiagnostics',component:ShowdiagnosticsComponent},
  {path:'showtests',component:ShowtestsComponent},
  {path:'**',redirectTo:'prescibe'},
  {path:"all",component:AllArtComponent},
  {path:"fruitarticle" ,component:FruitarticleComponent},
  {path:"climatearticle" ,component:ClimatearticleComponent},
  {path:"all/ayurveda",component:ArticlesdescriptionComponent,pathMatch:"full"},
  {path:"all/exercise",component:ExercisearticleComponent,pathMatch:"full"},
  {path:"all/food",component:FoodComponent,pathMatch:"full"},
   {path:"all/skincare",component:SkinarticleComponent, pathMatch:"full"},
   {path:"all/haircare",component:HairarticleComponent, pathMatch:"full"},
   {path:"all/fatcare",component:FatComponent, pathMatch:"full"},
   {path:"allProducts", component:AllProductsComponent,pathMatch:"full"},
   {path:"Products/SkincareProducts",component:SkincareProductsListComponent, pathMatch:"full"},
   {path:"Products/SkincareProducts/Oilatum",component:OilatumSoapdesComponent},
   {path:"Products/SkincareProducts/Dermadew",component:DermadewSoapdesComponent,pathMatch:"full"},
   {path:"Products/SkincareProducts/Nusoft",component:NusoftSoapdesComponent,pathMatch:"full"},
   {path:"Products/SkincareProducts/Edew",component:EdewSoapdesComponent,pathMatch:"full"},
   {path:"Products/SkincareProducts/Nivea",component:NiveaSoapdesComponent,pathMatch:"full"},
   {path:"Products/SkincareProducts/Jac",component:JacoildesComponent,pathMatch:"full"},
   {path:"Products/FamilycareProducts",component:FamilyCareProductsListComponent,pathMatch:"full"},
   {path:"Products/FamilycareProducts/Apollo",component:ApollodesComponent,pathMatch:"full"},
   {path:"Products/FamilycareProducts/VWash",component:VWashdesComponent,pathMatch:"full"},
   {path:"Products/FamilycareProducts/Menopro",component:MenoprodesComponent,pathMatch:"full"},
   {path:"Products/FamilycareProducts/Tedibar",component:TedibarComponent,pathMatch:"full"},
   {path:"Products/FitnesscareProducts",component:FitnessProductsListComponent,pathMatch:"full"},
   {path:"Products/FitnesscareProducts/B-Protin",component:BProtindesComponent,pathMatch:"full"},
   {path:"Products/FitnesscareProducts/Endura",component:EnduradesComponent,pathMatch:"full"},
   {path:"Products/FitnesscareProducts/Manna",component:MannadesComponent,pathMatch:"full"},
   {path:"Products/PaincareProducts",component:PaincareProductsListComponent,pathMatch:"full"},
   {path:"Products/PaincareProducts/Arlin",component:ArlinComponent,pathMatch:"full"},
   {path:"Products/PaincareProducts/Viopatch",component:ViopatchComponent},
   {path:"Products/PaincareProducts/Painrelif",component:PainrelifComponent},
   {path:"Products/PaincareProducts/Amrutanjan",component:AmrutanjanComponent},
   {path:"Products/PaincareProducts/Myovedic",component:MyovedicComponent},
   {path:"Products/PaincareProducts/ApolloPain",component:ApolloPainComponent},
   {path:"Products/WeightcareProducts",component:WeightcareProductsListComponent,pathMatch:"full"},
   {path:"Products/WeightcareProducts/Nutrix",component:NutrixComponent,pathMatch:"full"},
   {path:"Products/WeightcareProducts/Himalaya",component:HimalayaComponent,pathMatch:"full"},
   {path:"Products/WeightcareProducts/Cureveda",component:CurevedaComponent,pathMatch:"full"},
   {path:"Products/WeightcareProducts/WeightNo",component:WeightNoComponent,pathMatch:"full"},
   {path:"Products/WeightcareProducts/OZiva",component:OzivaComponent,pathMatch:"full"},
   {path:"Products/WeightcareProducts/GNC",component:GNCComponent,pathMatch:"full"},
   {path:"searchmedicine",component:SearchComponent,pathMatch:"full"}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
