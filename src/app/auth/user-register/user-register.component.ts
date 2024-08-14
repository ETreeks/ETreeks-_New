import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';

//import { first } from 'rxjs';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private router:Router , public r :RegisterService){}

  studentRegisterForm:FormGroup = new FormGroup({
    Username:new FormControl('',[Validators.required]),
    Password :new FormControl('',[Validators.minLength(8),Validators.required]),
    Fname: new FormControl('',Validators.required),
    Lname: new FormControl('',Validators.required),
    repeatPassword: new  FormControl('',[Validators.minLength(8),Validators.required])
  }
)




// Register()
// {
//   console.log(this.studentRegisterForm.value);
// }


matchError()
{
if(this.studentRegisterForm.controls['Password'].value
   == this.studentRegisterForm.controls['repeatPassword'].value)

   this.studentRegisterForm.controls['repeatPassword'].setErrors(null);

   else
this.studentRegisterForm.controls['repeatPassword'].setErrors(
  {
    misMatch:true // Custom Validation 
  }
);


}

goToLogin()
{
this.router.navigate(['auth/login']);
}

}





