import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient ,private toster:ToastrService) { }
  displayImage:any;

  stdRegister(body:any)
  {
    this.http.post('https://localhost:7281/api/Register/RegisterStd',body).subscribe((resp) => {
       console.log("student registered  correctly");
      }, err => {
        console.log("An error occurred in the student registration process");
      }
    );
  }

  CoachRegister(body:any)
  {
    debugger
    body.certificate=this.displayImage;
    this.http.post('https://localhost:7281/api/Register/RegisterTrainer',body).subscribe((resp) => {
       console.log("Coach registered  correctly");
       this.toster.success('You have successfully registered. Please wait until you are accepted. Check your email.');
      }, err => {
        console.log("An error occurred in the Coach registration process");
      }
    );
  }


  uploadAttachmenetCoach(images:FormData)
{
  debugger
this.http.post('https://localhost:7281/api/Register/UploadGImage',images).subscribe((reap:any)=>{
this.displayImage = reap.imagename;
console.log(this.displayImage);
},err=>{
console.log("error");
})
}




}
