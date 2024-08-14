import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email = new FormControl('ex@ample.com',[Validators.required,Validators.email]);
  // password2 : FormControl = new FormControl('*******',[Validators.required,Validators.minLength(8)]);

  username: FormControl =new FormControl('',[Validators.required]);
  password: FormControl = new FormControl('',[Validators.required,Validators.minLength(8)]);
  rememberMe: boolean = false;

  constructor(private auth:AuthService ,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.checkRememberMe();
  }

  checkRememberMe() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      this.username.setValue (savedUsername);
      this.password.setValue(savedPassword);
      this.rememberMe = true;
    }
  }
  onRememberMeChange(event: Event) {
    this.rememberMe = (event.target as HTMLInputElement).checked;

    
}

  onSubmit() {
    if (this.rememberMe) {
      localStorage.setItem('username', this.username.value);
      localStorage.setItem('password', this.password.value);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

  }

  submit()
  {
    console.log(this.username.value);
    console.log(this.password.value);
    
    this.auth.Login(this.username.value , this.password.value);


  }




}
