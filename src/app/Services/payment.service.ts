// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PaymentService {

//   constructor() { }
// }
// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@microsoft/signalr';
// // import { ToastrService } from 'ngx-toastr';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class PaymentService {

  
// //   constructor(private http:HttpClient ,private toster:ToastrService) { }

// //   stdPayment(body:any)
// //   {
// //     this.http.post('https://localhost:7281/api/ Payment/validate',body).subscribe((resp) => {
// //        console.log("student Payment  correctly");
// //       }, err => {
// //         console.log("An error occurred in the student Payment process");
// //       }
// //     );
// //   }
// // }

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PaymentService {
//   constructor(private http: HttpClient, private toastr: ToastrService) { }

//   stdPayment(body: any): Observable<PaymentDto[]> {
//     debugger
//     return this.http.post<PaymentDto[]>('https://localhost:7281/api/Payment/validate', body);
//   }
// }


// export interface PaymentDto {

//     FirstName :string
//     LastName :string
//     CardNumber :Number
//     Cvv :Number
//     ExpiryDate :Date
// }
  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  processPayment(paymentDetails: any, price: number): Observable<any> {
    debugger
    return this.http.post(`https://localhost:7281/api/Payment/ProcessPayment/${price}`, paymentDetails);
  }


}


