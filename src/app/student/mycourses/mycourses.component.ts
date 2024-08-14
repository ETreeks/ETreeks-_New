// import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { StudentService } from 'src/app/Services/student.service';
// import { CreatereviewComponent } from '../createreview/createreview.component';
// import {  AdminService } from 'src/app/Services/admin.service';
// import { ToastrService } from 'ngx-toastr';



// @Component({
//   selector: 'app-mycourses',
//   templateUrl: './mycourses.component.html',
//   styleUrls: ['./mycourses.component.css']
// })
// export class MycoursesComponent implements OnInit {

//   @Input() course: any;
//   userId = Number(localStorage.getItem('Id'));
//   reservations: any[] = [];

//   constructor(
//     public s: StudentService, 
//     public dialog: MatDialog, 
//     public admin: AdminService,
//     private toastr: ToastrService
//   ) {}
//   @ViewChild('openRDialog') callReviewDailog!:TemplateRef<any>; 
//   ngOnInit(): void {
//     this.getReservationsByUserId();
//   }

//   getReservationsByUserId(): void {
//     this.s.getallreservationstd().subscribe(
//       res => {
//         this.reservations = res.filter(reservation => reservation.gusers_Id === this.userId);
//         this.toastr.success('Retrieved reservations successfully');
//       },
//       err => {
//         console.error('Error fetching reservations:', err);
//         this.toastr.error('Something went wrong');
//       }
//     );
//   }
//      openCreateRDailog( id : number)
//      {
     
//        //this.dialog.open(CreatereviewComponent);
//        this.dialog.open(CreatereviewComponent, {
//         data: { id: id }
//       });
//      }
  
// }
/*
import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationDate3, StudentService } from 'src/app/Services/student.service';
import { CreatereviewComponent } from '../createreview/createreview.component';
import { AdminService, ReservationDate2 } from 'src/app/Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { CertificateService } from 'src/app/Services/certificate.service';
import { MainService } from 'src/app/Services/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

  @Input() course: any;
  userId = Number(localStorage.getItem('Id'));
  username = String(localStorage.getItem('username')); 
  reservations: any[] = [];
  reservations2: any[] = [];
  reservations3  : ReservationDate3[] = [];
  courses: any[] = [];
  courseDetailsMap: Map<number, string> = new Map(); 
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  courseId: any;
  courses10: any[] = [];

  constructor(
    public s: StudentService, 
    public dialog: MatDialog, 
    public admin: AdminService,
    private toastr: ToastrService,
    private certificateService: CertificateService,
    public mainService: MainService,
    private route: ActivatedRoute,
  ) {}
  Courses: any[] = [];
  @ViewChild('openRDialog') callReviewDailog!: TemplateRef<any>; 

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || '';
  if (!this.username) {
    console.error('Username is null. The user might not be logged in.');
    // Handle the case where username is null
  } else {
    console.log('Username:', this.username);
  }
  
    this.loadCourse();
    this.getReservationsByUserId();
  //   this.mainService.getAllCourses2().subscribe((data: any[]) => {
  //     this.Courses = data.map(course => ({
  //       id: course.id,
  //       name: course.name
  //     }));
  //     console.log(this.Courses); 
  //   }, err => {
  //     console.log("Error fetching categories", err);
  //   });
  }


  loadCourse(): void {
    this.mainService.getAllCourses2().subscribe((data: any[]) => {
      this.courses10 = data.map(course => ({
        id: course.id,
        name: course.name
      }));
   
      this.courses10.forEach(course => {
        this.courseDetailsMap.set(course.id, course.name);
      });
      console.log('Course details map:', this.courseDetailsMap);
    }, err => {
      console.log("Error fetching categories", err);
    });
  }

  // getReservationsByUserId(): void {
  //   debugger
  //   this.s.getallreservationstd2().subscribe(

  //     res => {
  //       this.reservations3 = res.filter(reservation3 => reservation3.gusers_Id === this.userId);
  //       this.toastr.success('Retrieved reservations successfully');
  //     },
  //     err => {
  //       console.error('Error fetching reservations:', err);
  //       this.toastr.error('Something went wrong');
  //     }
  //   );
  // }

getReservationsByUserId(): void {
  const userId = Number(localStorage.getItem('Id'));
  
  if (isNaN(userId) || userId === 0) {
    this.toastr.error('User ID is not valid.');
    return;
  }

  this.s.getallreservationstd2().subscribe(
    res => {
      this.reservations3 = res.filter(reservation3 => reservation3.userID === userId);
      this.toastr.success('Retrieved reservations successfully');
    },
    err => {
      console.error('Error fetching reservations:', err);
      this.toastr.error('Something went wrong');
    }
  );
}











  openCreateRDailog(id: number) {
    this.dialog.open(CreatereviewComponent, {
      data: { id: id }
    });
  }

  loadReservations(id: number, courseId: number) {
    debugger
    this.certificateService.getReservationsbyid(id).subscribe(res => {
      if (res && typeof res === 'object') {
        this.reservations2 = [res];
        
        this.reservations2.forEach(reservation => {
          if (reservation.completed === 'Yes') {
            debugger
            const studentName = this.username;
            console.log(`Fetching course name for course ID: ${courseId}`);
            const courseName = this.courseDetailsMap.get(courseId) || 'Unknown Course';
            console.log(`Course Name: ${courseName}`);
         
            this.createCertificate(studentName, courseName);
          }
        });
      } else {
        console.error('Expected an object but received:', res);
        this.toastr.error('Failed to load reservations');
      }
    });
  }

  createCertificate(studentName: string, courseName: string) {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const image = new Image();
      image.src = 'assets/Images/Image.jpg';

      image.onload = () => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('Name :  '+studentName, 300, 350);
        ctx.fillText('Course Name :  '+courseName, 300, 400);

        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `certificate_${studentName}_${courseName}.png`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      image.onerror = () => {
        console.error('Failed to load image');
      };
    }
  }
}
*/

import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CertificateService } from "src/app/Services/certificate.service";
import { ReservationDate4, StudentService } from "src/app/Services/student.service";
import { CreatereviewComponent } from "../createreview/createreview.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  reservations2: ReservationDate4[] = [];
  username = String(localStorage.getItem('username')); 
  courseDetailsMap: Map<number, string> = new Map(); 
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('openRDialog') callReviewDailog!: TemplateRef<any>; 
  //dialog: any;

    @Input() course: any;
  userId = Number(localStorage.getItem('Id'));
  reservations: any[] = [];
  constructor( public dialog: MatDialog ,public s :StudentService , public certificateService :CertificateService , private toastr:ToastrService){}
  ngOnInit(): void {
    this.s.getallreservationstd3();
  }
  loadReservations(id: number, coursename: string) {
    debugger
    this.certificateService.getallreservationstd3()
  
    const studentName = this.username;
    const courseName = coursename;
    
    this.createCertificate(studentName, courseName);
  }

  createCertificate(studentName: string, courseName: string) {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const image = new Image();
      image.src = 'assets/Images/Image.jpg';

      image.onload = () => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('Name :  '+studentName, 300, 350);
        ctx.fillText('Course Name :  '+courseName, 300, 400);

        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `certificate_${studentName}_${courseName}.png`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      image.onerror = () => {
        console.error('Failed to load image');
      };
    }
}

openCreateRDailog(id: number) {
  this.dialog.open(CreatereviewComponent, {
    data: { id: id }
  });
}

     
  
}