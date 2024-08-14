import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testimonial } from 'src/app/model/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private apiUrl = 'https://localhost:7281/api/testimonial'; // Update with your actual API URL
  private userBaseUrl = 'https://localhost:7281/api/user';

  constructor(private http: HttpClient) { }

  createTestimonial(testimonial : Testimonial):Observable<any>{
    return this.http.post<any>(this.apiUrl,testimonial)

  }
  getTestimonialById(id : number):Observable<Testimonial>{
    return this.http.get<Testimonial>(`${this.apiUrl}/${id}`);
  }
   getAllTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(`${this.apiUrl}`);
  }
  getApprovedTestimonials():Observable<Testimonial[]>{
    return this.http.get<Testimonial[]>(`${this.apiUrl}/approved`);
  }
  updateTestimonial(id : number , testimonial : any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, testimonial);
  }
  deleteTestimonial (id : number) :Observable <any>{
    return this.http.delete (`${this.apiUrl}/${id}`);
  }
  geUserById(id :number): Observable<any>{
    return this.http.get<any>(`${this.userBaseUrl}/${id}`);
  }

}
