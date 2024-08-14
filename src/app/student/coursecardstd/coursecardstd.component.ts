import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/Services/main.service';
import { StudentService } from 'src/app/Services/student.service';
import { CreatereviewComponent } from '../createreview/createreview.component';
import { CoursedetailsComponent } from '../coursedetails/coursedetails.component';

@Component({
  selector: 'app-coursecardstd',
  templateUrl: './coursecardstd.component.html',
  styleUrls: ['./coursecardstd.component.css']
})
export class CoursecardstdComponent implements OnInit {
  
  constructor( public s:StudentService ,public MM:MainService ,public dialog: MatDialog ,private router: Router){}
  @Input() course: any; 

 // userId: number = 4 ; // Dynamic 

  userId = Number(localStorage.getItem('Id'));
  ngOnInit(): void {
   //this.MM.getAllCourses();
   
  }
  // Book(courseId: number, userId: number): void {
    
  //   this.s.CreateBooking(courseId, userId);
  // }

  // @ViewChild('bookDailog') callBookDailog!:TemplateRef<any>; 

  // openBookDailog(courseId: number, userId: number){
  //   const dailogResult=this.dialog.open(this.callBookDailog);
  //   dailogResult.afterClosed().subscribe((result)=>{
  //    if(result !=undefined){
  //      if(result=='yes') 
        
  //        {
  //         //this.router.navigate(['/paymentform']);
  //         this.s.CreateBooking(courseId, userId); 
  //        }
  //      else 
  //      console.log('Thank you !');
  //    }
  //   })
  //    }

     ReadMore(courseId: number)
     {
   
       this.router.navigate([`/student/coursedetails/${courseId}`]);
     }



     



}