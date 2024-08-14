import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient , private toster :ToastrService) { }



  createContact(body:any)
  {
    debugger
    this.http.post('https://localhost:7281/api/Contact',body).subscribe((resp) => {
       console.log("user contact  correctly");
       this.toster.success('user contact  correctly');
        
      }, err => {
        console.log("An error occurred in the contact process");
        this.toster.error('An error occurred in the contact process');
        
      }
    );
  }

  viewT2 : any =[];
DisplayAllAcceptedTrainers() {
  this.http.get<any[]>('https://localhost:7281/api/Admin/DisplayAllTrainers').subscribe(
    res => {
      this.viewT2 = res.filter((t: any) => t.registration_Status_Trainer === 'Accepted');
      this.toster.success('Retrieved all accepted Trainers successfully');
    },
    err => {
      console.log('Error');
      console.log(err.status);
      console.log(err.message);
      this.toster.error('Something went wrong');
    });
}
DisplayAllAcceptedTrainers2(): Observable<any[]> {
  return this.http.get<any[]>(`https://localhost:7281/api/Admin/DisplayAllTrainers`);
}

courses : any =[];
getAllAcceptedCourses():any  {
  this.http.get<any[]>('https://localhost:7281/api/Course').subscribe(
    res => {
      this.courses = res.filter((course: any) => course.accepted_Status === 'Accepted');
      this.toster.success('Retrieved all accepted courses successfully');
    },
    err => {
      console.log('Error');
      console.log(err.status);
      console.log(err.message);
      this.toster.error('Something went wrong');
    });
}


Test : any =[];
getAllAcceptedTestimonial() :any 
{
    this.http.get<any[]>('https://localhost:7281/api/Testimonial').subscribe(
      res => {
        this.Test = res.filter((Te: any) => Te.testimonialsstatus === 'Accepted');
        this.toster.success('Retrieved all accepted courses successfully');
      },
      err => {
        console.log('Error');
        console.log(err.status);
        console.log(err.message);
        this.toster.error('Something went wrong');
      });
  }
  getTrainerSessionsByUsername(username: string): Observable<SessionDTO[]> {
    return this.http.get<SessionDTO[]>(`https://localhost:7281/api/Sessions?username=${username}`);
  }

}


export interface SessionDTO {
  courseName: string;
  sessionName: string;
  startDate: Date;
  endDate: Date;
  
}


