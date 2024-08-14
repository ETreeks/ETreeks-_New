import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChartService {
 
 
  constructor(private http: HttpClient) { }
  numtrainers:object = [];
  numstudents:object = [];
  numadmin:object = [];
 
  getCountStudents(): Observable<number> {
    return this.http.get<number>('https://localhost:7281/api/Admin/GetCountStudents');
  }
 
  getCountTrainers(): Observable<number> {
    return this.http.get<number>('https://localhost:7281/api/Admin/GetCountTrainers');
  }
 
  getCountAdmin(): Observable<number> {
    return this.http.get<number>('https://localhost:7281/api/Admin/GetCountAdmin');
  }
 
 
 
}