import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpEventType} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floatingimage',
  templateUrl: './floatingimage.component.html',
  styleUrls: ['./floatingimage.component.css']
})
export class FloatingimageComponent implements OnInit {
  
  data1:string;
    

  selectedFile:File = null;

  constructor(private http:HttpClient,private router:Router) {


  }

  onFileSelected(event)
  {
  
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile.name);
  }

  onUpload()
  {
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this.http.post('http://127.0.0.1:8000/backend/prescibe/',fd,{
      reportProgress:true,
      observe:'events'
    }).
    subscribe(event=>{
      if(event.type === HttpEventType.UploadProgress)
      {
        console.log('Upload Progress :' + Math.round(event.loaded/event.total)*100 + '%');
      }
      else if(event.type === HttpEventType.Response)
      {
        console.log(event);
        this.data1=event.body.data;
        
      }
      });
  }

  gotoLogin(pagename:string)
  {
    console.log('this is login');
    this.router.navigate([`${pagename}`]);
  }
  ngOnInit() {

  }

}
