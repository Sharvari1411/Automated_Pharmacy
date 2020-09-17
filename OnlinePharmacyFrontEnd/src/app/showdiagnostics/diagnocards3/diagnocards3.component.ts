import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnocards3',
  templateUrl: './diagnocards3.component.html',
  styleUrls: ['./diagnocards3.component.css']
})
export class Diagnocards3Component implements OnInit {
  services:any;
  services1:any;

  constructor() {
    this.services=[
      {
        id:1,
        title:'Lipid Profile',
        imgname:'lipid_profile.png',
        t1:'Ldl Cholestrol Blood',
        d1:'Also known as Cholestrol Ldl Enzymetic Colorimetric Method Blood',
        t2:'Hdl Cholestrol Blood',
        d2:'Also known as Cholestrol Hdl Enzymetic Colorimetric Method Blood',
        t3:'Vldl Cholestrol Blood',
        d3:'Also known as Vldl Cholestrol Blood',
        t4:'Total Cholestrol Test',
        d4:'Also known as Cholestrol Test',
        t5:'Triglycerides Blood Test',
        d5:'Also known as Triglycerides Blood'
      },
      {
        id:2,
        title:'Liver Profile',
        imgname:'liver_profile.png',
        t1:'Ldl Cholestrol Blood',
        d1:'Also known as Cholestrol Ldl Enzymetic Colorimetric Method Blood',
        t2:'Hdl Cholestrol Blood',
        d2:'Also known as Cholestrol Hdl Enzymetic Colorimetric Method Blood',
        t3:'Vldl Cholestrol Blood',
        d3:'Also known as Vldl Cholestrol Blood',
        t4:'Total Cholestrol Test',
        d4:'Also known as Cholestrol Test',
        t5:'Triglycerides Blood Test',
        d5:'Also known as Triglycerides Blood'
      },
      {
        id:3,
        title:'Blood Sugar',
        imgname:'blood_sugar.png',
        t1:'Ldl Cholestrol Blood',
        d1:'Also known as Cholestrol Ldl Enzymetic Colorimetric Method Blood',
        t2:'Hdl Cholestrol Blood',
        d2:'Also known as Cholestrol Hdl Enzymetic Colorimetric Method Blood',
        t3:'Vldl Cholestrol Blood',
        d3:'Also known as Vldl Cholestrol Blood',
        t4:'Total Cholestrol Test',
        d4:'Also known as Cholestrol Test',
        t5:'Triglycerides Blood Test',
        d5:'Also known as Triglycerides Blood'
      }];
    this.services1=[
      {
        id:4,
        title:'Thyroid Profile',
        imgname:'thyroid_profile.svg',
        t1:'Ldl Cholestrol Blood',
        d1:'Also known as Cholestrol Ldl Enzymetic Colorimetric Method Blood',
        t2:'Hdl Cholestrol Blood',
        d2:'Also known as Cholestrol Hdl Enzymetic Colorimetric Method Blood',
        t3:'Vldl Cholestrol Blood',
        d3:'Also known as Vldl Cholestrol Blood',
        t4:'Total Cholestrol Test',
        d4:'Also known as Cholestrol Test',
        t5:'Triglycerides Blood Test',
        d5:'Also known as Triglycerides Blood'
      },
      {
        id:5,
        title:'Pregnancy Test',
        imgname:'pregnancy_test.svg',
        t1:'Ldl Cholestrol Blood',
        d1:'Also known as Cholestrol Ldl Enzymetic Colorimetric Method Blood',
        t2:'Hdl Cholestrol Blood',
        d2:'Also known as Cholestrol Hdl Enzymetic Colorimetric Method Blood',
        t3:'Vldl Cholestrol Blood',
        d3:'Also known as Vldl Cholestrol Blood',
        t4:'Total Cholestrol Test',
        d4:'Also known as Cholestrol Test',
        t5:'Triglycerides Blood Test',
        d5:'Also known as Triglycerides Blood'
      }];


   }

  ngOnInit() {
  }

}
