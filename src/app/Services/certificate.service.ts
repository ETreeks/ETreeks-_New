
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CertificateService {
 
  constructor(private http: HttpClient) { }

  getAllReservations(): Observable<any[]> {
    debugger
    return this.http.get<any[]>(`https://localhost:7281/api/reservation`);
  }
  getReservationsbyid(id: number): Observable<any[]> {
    debugger
    return this.http.get<any[]>(`https://localhost:7281/api/reservation/GetById/`+id);
  }
 
  GetAllCourses(): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:7281/api/course`);
  }
 
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:7281/api/admin/DisplayAllUsers`);
  }
  
  RD:any=[];
getallreservationstd3() {

this.http.get<ReservationDate4[]>('https://localhost:7281/api/Reservation/ReservationDate4').subscribe((res:any)=>{
this.RD=res; 
console.log('get');

},err=>{
console.log('Error');})
}
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