import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient , private router :Router 
    , private toster : ToastrService , private snackBar:MatSnackBar) { }
  Login(userName:any , password:any)
  {
var body ={
username: userName.toString(),
password: password.toString()
}
const headerDirc ={
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
const requestOptions = {
  headers : new HttpHeaders(headerDirc)
}
console.log(body);
//localStorage.setItem('username', body.username);

console.log(localStorage.getItem('username'));
debugger
this.http.post('https://localhost:7281/api/Login',body,requestOptions).subscribe((resp :any) => {
  debugger
  if (resp === "Your registration is pending. Please wait for approval.") {
    //alert("Your registration is pending. Please wait for approval.");
    this.toster.error("Your registration is pending. Please wait for approval.");

    this.snackBar.open('Notification: Your registration is pending. Please wait for approval.', 'Close', {
      verticalPosition: 'top', 
      horizontalPosition: 'center' 
    });

    return ;
  }
 localStorage.setItem('username', body.username);
  const responce ={
    token:resp.toString()
  }
  localStorage.setItem('token',responce.token)
  let  data:any = jwtDecode(responce.token)//object
  localStorage.setItem('user',JSON.stringify(data));
  debugger
  localStorage.setItem('Id', data.UserId); // Store the user_Id
debugger
  if(data.RoleId=="1")
  {
    this.router.navigate(['admin/dashboard']);
  }
  else if (data.RoleId=="2")
  {
    this.router.navigate(['trainer/dashboardt']);
  }
  else if (data.RoleId=="3")
    {
      this.router.navigate(['student']);
    }

  
  console.log("user login  correctly");
  this.toster.success("user login  correctly");
 }, err => {
   console.log("An error occurred in the login process ");
   this.toster.error("An error occurred in the login process");
   this.toster.error("username or password are wrong");
 }
);}




getTrainerIdFromToken(): number | null {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken: any = jwtDecode(token);
    return decodedToken ? decodedToken.UserId : null; // Adjust the property name based on your token structure
  }
  return null;
}
getStudentIdFromToken(): number | null {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken: any = jwtDecode(token);
    return decodedToken ? decodedToken.UserId : null; // Adjust the property name based on your token structure
  }
  return null;
}

// console.log("User logged in correctly");
// }, err=> {
//   debugger
//   if (err.error.message === "Your registration is pending. Please wait for approval.") {
//     alert("Your registration is pending. Please wait for approval.");
//    // this.toster.error("Your registration is pending. Please wait for approval.");
//   } else {
//     console.log("An error occurred in the login process");
//   }
// });}





}