// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root'
// })
// export class FooterService {

//   constructor(public http: HttpClient) {}
//   Footer:any =[];

// getFooterData()
// {
//   debugger
// this.http.get('https://localhost:7281/api/home').subscribe(res=>
// {
// this.Footer=res; 
// console.log(this.Footer);
// },
// err=>{
// console.log("error");
// console.log(err.status);
// console.log(err.manage);
// })
// }


// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private footerSubject = new BehaviorSubject<any[]>([]);
  footer$ = this.footerSubject.asObservable();

  constructor(private http: HttpClient) {}

  getFooterData() {
    this.http.get<any[]>('https://localhost:7281/api/home').subscribe(
      res => {
        this.footerSubject.next(res);
        console.log(res);
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
      }
    );
  }
}

