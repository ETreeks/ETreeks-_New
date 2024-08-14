import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public rt : RegisterService){}

  CoachRegisterForm:FormGroup = new FormGroup({
    Username:new FormControl('',[Validators.required]),
    Password :new FormControl('',[Validators.minLength(8),Validators.required]),
    Fname: new FormControl('',Validators.required),
    Lname: new FormControl('',Validators.required),
    Certificate : new FormControl('',Validators.required),
    Specialization : new FormControl('',Validators.required),
    repeatPassword: new  FormControl('',[Validators.minLength(8),Validators.required])
  }
)


uploadImage(file:any)
  {
    if(file.length ==0)  return  ;
    let fileToUpload = <File> file[0];
    const formData = new FormData ();
    formData.append('file',fileToUpload,fileToUpload.name);
    this.rt.uploadAttachmenetCoach(formData);

  }



  matchError()
  {
  if(this.CoachRegisterForm.controls['Password'].value
     == this.CoachRegisterForm.controls['repeatPassword'].value)
  
     this.CoachRegisterForm.controls['repeatPassword'].setErrors(null);
  
     else
  this.CoachRegisterForm.controls['repeatPassword'].setErrors(
    {
      misMatch:true // Custom Validation 
    }
  );

  }

  

}
