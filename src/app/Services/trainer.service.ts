import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileTrainerDTO } from 'src/app/dtos/profile-trainer.dto'; // Adjust path as needed
import { AddresssDto } from 'src/Interface/AddresssDto';
import { CourseSession } from 'src/Interface/CourseSession ';


@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private baseUrl: string = 'https://localhost:7281/api/Trainer';
  displayImage: any;


  constructor(private http:HttpClient) { }
  courseSession :any=[];


  searchReservations(startDate: string, endDate: string): Observable<TrainerSearch[]> {
    debugger
    return this.http.get<TrainerSearch[]>(`https://localhost:7281/api/Trainer/Search/${startDate}/${endDate}`);
  }
  
  getallreservationT(): Observable<TrainerSearch[]> {
    debugger
    const trainerId = Number(localStorage.getItem('Id'));
    return this.http.get<TrainerSearch[]>(`https://localhost:7281/api/Trainer/GetAllReservationT/`+trainerId);
  }


  getallreservationTT(): Observable<ReservationDate2[]> {
    debugger
    const trainerId = Number(localStorage.getItem('Id'));
    return this.http.get<ReservationDate2[]>(`https://localhost:7281/api/Trainer/GetAllReservationT3/`+trainerId);
  }
completed :any=[];
getallreservationT2()
{
  const trainerId = Number(localStorage.getItem('Id'));
  this.http.get<any[]>(`https://localhost:7281/api/Trainer/GetAllReservationT2/`+trainerId).subscribe(res=>
{
this.completed=res; 
},
err=>{
console.log("error");
console.log(err.status);
console.log(err.manage);
})
}

// RD:any=[];
// getallreservationstd3() {

// this.http.get<ReservationDate4[]>('https://localhost:7281/api/Reservation/ReservationDate4').subscribe((res:any)=>{
// this.RD=res; 
// console.log('get');

// },err=>{
// console.log('Error');})
// }
RD: any[] = [];

getallreservationstd3() {
  const trainerId = Number(localStorage.getItem('Id'));

  this.http.get<ReservationDate2[]>('https://localhost:7281/api/Trainer/GetAllReservationT1000/'+ trainerId).subscribe((res: any) => {
    this.RD=res; 
    console.log('Filtered Reservations:', this.RD);
  }, err => {
    console.log('Error:', err);
  });
}



RDT :any= [ ];
getallreservationTTT(): Observable<ReservationDate2[]> {
  debugger
  const trainerId = Number(localStorage.getItem('Id'));
  return this.http.get<ReservationDate2[]>(`https://localhost:7281/api/Trainer/GetAllReservationT3/`+trainerId);
}

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`https://localhost:7281/api/reservation`);
  }
  getAllReservations2(): Observable<Reservation[]> {
    const trainerId = Number(localStorage.getItem('Id'));
    return this.http.get<Reservation[]>(`https://localhost:7281/api/reservation`);
  }
  
  // acceptReservation(id: number): Observable<any> {
  //   return this.http.post(`https://localhost:7281/api/Trainer/accept/${id}`, {});
  // }
  acceptReservation(id: number) {
    this.http.post('https://localhost:7281/api/Trainer/accept/' + id, {}).subscribe(
      (res: any) => {
        console.log('Yes');
       // window.location.reload();
      },
      err => {
        console.log('Error', err);
      }
    );
    window.location.reload();
  }
 
rejectReservation(id: number): Observable<any> {
  return this.http.post(`https://localhost:7281/api/Trainer/reject/${id}`, {});
}
GetAllCourses(): Observable<Course[]> {
  return this.http.get<Course[]>(`https://localhost:7281/api/course`);
}
 
getAllUsers(): Observable<Guser[]> {
  return this.http.get<Guser[]>(`https://localhost:7281/api/admin/DisplayAllUsers`);
}


viewProfile(trainerId: number): Observable<ProfileTrainerDTO> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this.http.get<ProfileTrainerDTO>(`${this.baseUrl}/${trainerId}`, { headers });
}
getAllUsers2(): Observable<any[]> {
  return this.http.get<any[]>(`https://localhost:7281/api/admin/DisplayAllUsers`);
}
completedYes(id: number) {
  this.http.put('https://localhost:7281/api/Trainer/Completed/' + id, {}).subscribe(
    (res: any) => {
      console.log('Yes');
      window.location.reload();
    },
    err => {
      console.log('Error', err);
    }
  );
}



updateProfile(profile: ProfileTrainerDTO): Observable<void> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this.http.put<void>(this.baseUrl, profile, { headers });
}

//---------------------------------------------------

private CoursebaseUrl = 'https://localhost:7281/api/CourseSession';
deleteCourseSession(id: number): Observable<void> {
  return this.http.delete<void>(`${this.CoursebaseUrl}/${id}`);
}

createCourseSession(body: any): Observable<void> {
  return this.http.post<void>(this.CoursebaseUrl, body);
}

updateCourseSession(body: any): Observable<void> {
  return this.http.put<void>(this.CoursebaseUrl, body);
}

private getSessionsByCourseUrl = 'https:localhost:7281/api/Course' 


getSessionsByCourse(courseId: number): Observable<CourseSession[]> {
  return this.http.get<CourseSession[]>(`${this.getSessionsByCourseUrl}/${courseId}/sessions`);
}



updateUser(profile: ProfileTrainerDTO) {
  profile.imagename = this.displayImage;
  this.http.put('https://localhost:7281/api/Trainer', profile).subscribe(
    (resp: any) => {
      alert('DONE');
    },
    err => {
      console.log(err.status);
    }
  );
}

getTrainer(trainerId: number): Observable<any> {
  const url = `https://localhost:7281/api/trainer/${trainerId}`;
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this.http.get<any>(url, { headers });
}

uploadFile(file: FormData) {
  this.http.post('https://localhost:7281/api/Trainer/uploadImage/', file).subscribe(
    (resp: any) => {
      this.displayImage = resp.imagename;
      console.log(resp);
    },
    err => {
      alert('Upload Image failed');
    }
  );
}


private AapiUrl = 'https://localhost:7281/api/Address'; 


createAddress(address: AddresssDto): Observable<any> {
  return this.http.post<any>(`${this.AapiUrl}/create`, address);
}

updateAddress(id: number, address: AddresssDto): Observable<any> {
  return this.http.put<any>(`${this.AapiUrl}/update/${id}`, address);
}

getAllAddresses(): Observable<AddresssDto[]> {
  return this.http.get<AddresssDto[]>(`${this.AapiUrl}/get-all`);
}

getAddressById(id: number): Observable<AddresssDto> {
  return this.http.get<AddresssDto>(`${this.AapiUrl}/get/${id}`);
}

deleteAddress(id: number): Observable<any> {
  return this.http.delete<any>(`${this.AapiUrl}/delete/${id}`);
}

}
export interface TrainerSearch {
  fullName: string;
  courseName: string;
  categoryname: string;
  reservationdate: Date;
}

export interface Reservation {
  gusers: Guser;
  courses: Course;
  id: number;
  reservationstatus: string;
  reservationdate: Date;
  gusers_Id: number;
  course_Id: number;
  finalmark: number;
  completed: string;
  }
   
  export interface Course {
    id: number;
    name: string;
    trainer_Id:number;
  }
  export interface Guser {
    id: number;
    fname: string;
    lname: string;
  }

  
  export interface ReservationDate2 {
    user_Full_Name: string;
    session_Name: string;
    course_Name: string;
    completed_Status: string;
    reservation_Status :string;
    final_Mark :string;
    reservation_Date :Date;
    reservation_ID:number;
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