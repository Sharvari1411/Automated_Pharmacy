import { Component, OnInit } from '@angular/core';
import { medicine } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  medicine:medicine[] =[];
fullname:string;
  constructor() { }

  ngOnInit(): void {
    this.medicine=[{
  "fullname":"Crocine",

},{
  
  "fullname":"Nicip plus",

},{
  
  "fullname":"B-complex",

},{
  "fullname":"Cipla",
},
{
  "fullname":"Amoxapine",
},
{
  "fullname":"Aldara ",
},
{
  "fullname":"Clomid ",
},
{
  "fullname":"Coreg",
},
{
  "fullname":"Hyalgan ",
},
{
  "fullname":"Epzicom",
},
{
  "fullname":"Xultophy",
},
{
  "fullname":"Apri ",
},
{
  "fullname": "Boniva"
},{
  "fullname": "Hydralazine"
}];
  }
  Search(){

   this.medicine=this.medicine.filter(res=>{
     return res.fullname.match(this.fullname);
   })
      
  }



 

}
