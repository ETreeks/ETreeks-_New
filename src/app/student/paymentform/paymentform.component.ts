// import { Component, ViewChild, TemplateRef } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { PaymentService } from 'src/app/Services/payment.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatDialog } from '@angular/material/dialog';
// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { StudentService } from 'src/app/Services/student.service';

// @Component({
//   selector: 'app-paymentform',
//   templateUrl: './paymentform.component.html',
//   styleUrls: ['./paymentform.component.css']
// })
// export class PaymentformComponent {
//   @ViewChild('callBookDailog') callBookDailog!: TemplateRef<any>;
//   price!: number;
//   courseId!: number;
//   userId: number = Number(localStorage.getItem('Id'));

//   PaymentForm: FormGroup = new FormGroup({
//     FirstName: new FormControl('', [Validators.required]),
//     LastName: new FormControl('', [Validators.required]),
//     CardNumber: new FormControl('', Validators.required),
//     Cvv: new FormControl('', Validators.required),
//     ExpiryDate: new FormControl('', Validators.required),
//   });

//   constructor(
//     public p: PaymentService,
//     private route: ActivatedRoute,
//     private snackBar: MatSnackBar,
//     private dialog: MatDialog,
//     private http: HttpClient,
//     private router :Router,
//     private s :StudentService
//   ) {
//     // Capture the course price and courseId from the route
//     this.route.params.subscribe(params => {
//       this.price = params['id'];
//     });

//     this.route.queryParams.subscribe(queryParams => {
//       debugger
//       this.courseId = queryParams['courseId'];
//     });
//   }

//   submitPayment() {
//     if (this.PaymentForm.valid) {
//       this.p.processPayment(this.PaymentForm.value, this.price).subscribe(
//         response => {
//           // Handle successful payment
//           this.snackBar.open('Payment successful!', 'Close', {
//             verticalPosition: 'top',
//             horizontalPosition: 'center'
//           });

//          // this.router.navigate(['/student']);
//          //this.s.CreateBooking(courseId, userId);
//          debugger
//          this.openBookDailog(this.courseId,this.userId);
//         },
//         error => {
//           // Handle error
//           if (error.error === 'Invalid payment details.') {
//             this.snackBar.open('Invalid payment details!', 'Close', {
//               verticalPosition: 'top',
//               horizontalPosition: 'center'
//             });
//             return;
//           } else if (error.error === 'Insufficient balance.') {
//             this.snackBar.open('Insufficient balance!', 'Close', {
//               verticalPosition: 'top',
//               horizontalPosition: 'center'
//             });
//             return;
//           }
//         }
//       );
//     }
//   }

//   openBookDailog(courseId: number, userId: number) {
//     const dailogResult = this.dialog.open(this.callBookDailog);
//     dailogResult.afterClosed().subscribe((result) => {
//       if (result !== undefined) {
//         if (result === 'yes') {
//           this.s.CreateBooking(courseId, userId);
//         } else {
//           console.log('Thank you !');
//         }
//       }
//     });
   
//   }
//   goback(){
//     this.router.navigate(['student/coursedetails/'+this.courseId]);
//   }
// }
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/Services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent {
  @ViewChild('callBookDailog') callBookDailog!: TemplateRef<any>;
  price!: number;
  courseId!: number;
  sessionId!: number;
  userId: number = Number(localStorage.getItem('Id'));

  PaymentForm: FormGroup = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    CardNumber: new FormControl('', Validators.required),
    Cvv: new FormControl('', Validators.required),
    ExpiryDate: new FormControl('', Validators.required),
  });

  constructor(
    public p: PaymentService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
    private s: StudentService
  ) {
    // Capture the course price, courseId, and sessionId from the route
    this.route.params.subscribe(params => {
      this.price = params['id'];
    });

    this.route.queryParams.subscribe(queryParams => {
      this.courseId = queryParams['courseId'];
      this.sessionId = queryParams['sessionId'];
    });
  }

  submitPayment() {
    if (this.PaymentForm.valid) {
      this.p.processPayment(this.PaymentForm.value, this.price).subscribe(
        response => {
          // Handle successful payment
          this.snackBar.open('Payment successful!', 'Close', {
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

          this.openBookDailog(this.courseId, this.sessionId, this.userId);
        },
        error => {
          // Handle error
          if (error.error === 'Invalid payment details.') {
            this.snackBar.open('Invalid payment details!', 'Close', {
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          } else if (error.error === 'Insufficient balance.') {
            this.snackBar.open('Insufficient balance!', 'Close', {
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          }
        }
      );
    }
  }

  openBookDailog(courseId: number, sessionId: number, userId: number) {
    const dailogResult = this.dialog.open(this.callBookDailog);
    dailogResult.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        if (result === 'yes') {
          this.s.CreateBooking( sessionId, userId);
        } else {
          console.log('Thank you !');
        }
      }
    });
  }

  goback() {
    this.router.navigate(['student/coursedetails/' + this.courseId]);
  }
}
