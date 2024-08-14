import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { GuserDto } from 'src/Interface/guser.dto';
import { ProfileStudentDTO } from 'src/Interface/profile-student-dto';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient , private toster:ToastrService) { }
  notif:any=[];
  courses:any=[];


  // CreateBooking(courseId: number, userId: number): void {
  //   debugger
  //   var body ={
  //     Course_Id: courseId.toString(),
  //     Gusers_Id: userId.toString()
  //     }
  //     const headerDirc ={
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //     const requestOptions = {
  //       headers : new HttpHeaders(headerDirc)
  //     }
  //   //const bookingData = { userId, courseId };
  //   this.http.post('https://localhost:7281/api/Student', body,requestOptions).subscribe(
  //     (resp) => {
  //       console.log("Booking Created Successfully");
  //     },
  //     err => {
  //       console.log("An error occurred in the booking process", err);
  //     }
  //   );
  //   window.location.reload();
  // }
  CreateBooking(sessionId: number, userId: number): void {
    const body = {
      Session_Id: sessionId.toString(),
      Gusers_Id: userId.toString()
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  
    this.http.post('https://localhost:7281/api/Student', body, { headers }).subscribe(
      response => {
        console.log("Booking Created Successfully");
      },
      error => {
        console.log("An error occurred in the booking process", error);
      }
    );
  }
  // checkBooking(sessionId: number, userId: number): Observable<boolean> {
  //   return this.http.get<boolean>(`https://localhost:7281/api/Student/CheckBooking`, {
  //     params: {
  //       sessionId: sessionId.toString(),
  //       userId: userId.toString()
  //     }
  //   });
  // }
  
  

  getTrainerSessionsByUsername(username: string): Observable<SessionDTO[]> {
    debugger
    return this.http.get<SessionDTO[]>(`https://localhost:7281/api/Student/GetTrainerSessionsByUsername/${username}`);
  }
  getNotifications(userId: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7281/api/Student/notifications/${userId}`);
    
  }
getNotifications2(id:number)
{
debugger
this.http.get('https://localhost:7281/api/Student/notifications/'+id).subscribe((res:any)=>{
this.notif=res; 
console.log('get');



},err=>{
console.log('Error');})
}


// createReview(review: any): Observable<any> {
//   return this.http.post('https://localhost:7281/api/Review', review);
// }
createReview(body: any) {
  debugger
  const userId = Number(localStorage.getItem('Id'));
  body.guser_Id = userId; 

  this.http.post('https://localhost:7281/api/Review', body).subscribe(
    (resp) => {
      this.toster.success('Review Created Successfully');
      console.log("Review Created Successfully");
      window.location.reload(); 
    },
    err => {
      this.toster.error('An error occurred in the create Review process');
      console.log("An error occurred in the create Review process", err);
    }
  );
}


getAllCourses(): Observable<any[]> {
  return this.http.get<any[]>('https://localhost:7281/api/Course');
}
getallreservationstd(): Observable<any[]> {
  debugger
  return this.http.get<any[]>(`https://localhost:7281/api/Reservation`);
}
getallreservationstd2(): Observable<ReservationDate3[]> {
  debugger
  return this.http.get<ReservationDate3[]>(`https://localhost:7281/api/Reservation`);
}


// getallreservationstd3(): Observable<ReservationDate4[]> {
//   debugger
//   return this.http.get<ReservationDate4[]>(`https://localhost:7281/api/Reservation/ReservationDate4`);
// }
RD:any=[];
getallreservationstd3() {

this.http.get<ReservationDate4[]>('https://localhost:7281/api/Reservation/ReservationDate4').subscribe((res:any)=>{
this.RD=res; 
console.log('get');

},err=>{
console.log('Error');})
}


getTrainerSessionsById(trainerId: number): Observable<SessionDTO[]> {
  debugger
  return this.http.get<SessionDTO[]>(`https://localhost:7281/api/Student/GetTrainerSessionsByID/${trainerId}`);
}



private apiProfileUrl = 'https://localhost:7281/api/Student';
viewProfile(id: number): Observable<ProfileStudentDTO> {
  return this.http.get<ProfileStudentDTO>(`${this.apiProfileUrl}/${id}`);
}

updateProfile(profileStudentDto: ProfileStudentDTO): Observable<void> {
  return this.http.put<void>(`${this.apiProfileUrl}`, profileStudentDto);
}

private apiUrl = 'https://localhost:7281/api/Student'; 


uploadProfileImage(imageData: FormData): Observable<ProfileStudentDTO> {
  return this.http.post<ProfileStudentDTO>(`${this.apiUrl}/UploadImage`, imageData);
}

getAllReviews(): Observable<Review[]> {
  return this.http.get<Review[]>('https://localhost:7281/api/Review');
}
getAllUsers(): Observable<Guser[]> {
  return this.http.get<Guser[]>(`https://localhost:7281/api/admin/DisplayAllUsers`);
}





// AllReviewH: any[] = [];

// getAllReviewsH() {
//   const userID = Number(localStorage.getItem('Id'));

//   this.http.get('https://localhost:7281/api/Review').subscribe(
//     (res: any) => {
//       // Filter the reviews based on the logged-in user's ID
//       this.AllReviewH = res.filter((review: any) => review.guser_Id === userID);
//       this.toster.success('Successfully retrieved reviews.');
//     },
//     err => {
//       console.log("error");
//       console.log(err.status);
//       console.log(err.message);
//       this.toster.error('Something went wrong.');
//     }
//   );
// }


// AllTestH: any[] = [];

// getAllTestH() {
//   const userID = Number(localStorage.getItem('Id'));

//   this.http.get('https://localhost:7281/api/Testimonial').subscribe(
//     (res: any) => {
//       // Filter the Test based on the logged-in user's ID
//       this.AllTestH = res.filter((Test: any) => Test.guser_Id === userID);
//       this.toster.success('Successfully retrieved Testimonial.');
//     },
//     err => {
//       console.log("error");
//       console.log(err.status);
//       console.log(err.message);
//       this.toster.error('Something went wrong.');
//     }
//   );
// }

getAllReviewsH(): Observable<any[]> {
  const userID = Number(localStorage.getItem('Id'));
  return this.http.get<any[]>('https://localhost:7281/api/Review').pipe(
    map((reviews: any[]) => reviews.filter(review => review.guser_Id === userID))
  );
}

getAllTestH(): Observable<any[]> {
  const userID = Number(localStorage.getItem('Id'));
  return this.http.get<any[]>('https://localhost:7281/api/Testimonial').pipe(
    map((testimonials: any[]) => testimonials.filter(test => test.gusers_Id === userID))
  );

} 


// ShowS:any=[];
 
// //hits api
// ShowSession()
// {
// this.http.get<any[]>('https://localhost:7281/api/CourseSession').subscribe(res=>
// {
// this.ShowS = res;

// },
// err=>{
// console.log("error");
// console.log(err.status);
// console.log(err.manage);

// })
// }

getAllCourseSessions() {
  return this.http.get<any[]>(`https://localhost:7281/api/CourseSession`);
}




}
export interface Review {
  gusers: Guser;
  id: number;
  message: string;
  reviewDate: Date;
  guser_Id: number;
  course_Id: number;
  guser_Fname?: string;
  guser_Lname?: string;
}
export interface Guser {
  id: number;
  fname: string;
  lname: string;
}

export interface SessionDTO {
  courseName: string;
  sessionName: string;
  startDate: Date;
  endDate: Date;
  availablE_STATUS :string; 

  
}
export interface ReservationDate3 {
  userID :number;
  user_Full_Name: string;
  session_Name: string;
  course_Name: string;
  completed_Status: string;
  final_Mark :string;
  reservation_Date :Date;
  reservation_Status :string;
  
  cid :number ;
  reservation_ID :number;
  }



  export interface ReservationDate4 {
    userID :number;
    user_Full_Name: string;
    session_Name: string;
    course_Name: string;
    completed_Status: string;
    final_Mark :string;
    reservation_Date :Date;
    reservation_Status :string;
    cid :number ;
    reservation_ID :number;
    }
