// import { CanActivateFn } from '@angular/router';

// export const authorizationGuard: CanActivateFn = (route, state) => {
//   return true;
// };

// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

// export const authorizationGuard: CanActivateFn = (route, state) => {
//   const router = new Router()
//   const toastr:ToastrService = inject(ToastrService); 
//  console.log(state);
 
// const token= localStorage.getItem('token'); 
// if(token) //user 
// {
//   debugger
//   if(state.url.indexOf('admin')>0)
//   {
//     let user :any = localStorage.getItem('user'); 
//     user= JSON.parse(user); 
//     if(user.RoleId=="1")
//     {
//       toastr.success('Welcome in admin dahsboard'); 
//       return true; 
//     }

//     else //roleid!=1 
//      {
//       toastr.warning('this page for admin only  !! . please Login'); 
//       router.navigate(['auth/login']); 
//       return false ; 
//     }
//   }
//   return false; //else if(state.url.indexOf('user')>0)

// }

// else 
// {
//   toastr.warning('please sing up '); 
//   router.navigate(['auth/register']); 
//   return false ; 
// }
// };
///////////////////////////////////////////////

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const router = new Router()
  const toastr: ToastrService = inject(ToastrService); 
  console.log(state);
 
  const token = localStorage.getItem('token'); 
  if (token) {
    let user: any = localStorage.getItem('user'); 
    user = JSON.parse(user); 
    
    if (state.url.indexOf('admin') > 0) {
      if (user.RoleId == "1") {
        //toastr.success('Welcome to the admin dashboard'); 
        return true; 
      } else {
        toastr.warning('This page is for admin only! .Please login :)'); 
        router.navigate(['auth/login']); 
        return false; 
      }
    } else if (state.url.indexOf('trainer') > 0) {
      if (user.RoleId == "2") {
       // toastr.success('Welcome to the trainer dashboard'); 
        return true; 
      } else {
        toastr.warning('This page is for trainers only! .Please login :)'); 
        router.navigate(['auth/login']); 
        return false; 
      }
    } else if (state.url.indexOf('student') > 0) {
      if (user.RoleId == "3") {
        //toastr.success('Welcome to the student dashboard'); 
        return true; 
      } else {
        toastr.warning('This page is for students only!. Please login :)'); 

        router.navigate(['auth/login']); 
        return false; 
      }
    }
  } else {
    toastr.warning('Please sign up'); 
    router.navigate(['auth/register']); 
    return false; 
  }
  return false; // default return false if no condition is met
};

