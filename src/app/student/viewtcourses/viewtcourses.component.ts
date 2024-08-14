import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/Services/main.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-viewtcourses',
  templateUrl: './viewtcourses.component.html',
  styleUrls: ['./viewtcourses.component.css']
})
export class ViewtcoursesComponent implements OnInit {
  courses: any[] = [];
  trainerId!: number;
 
  constructor(
    public main: MainService,
   private route: ActivatedRoute
   ,private route2 :Router
   ,public dialog: MatDialog
   ,public s :StudentService
  ) {}
  userId = Number(localStorage.getItem('Id'));
 
  ngOnInit(): void {
    debugger
    this.route.queryParams.subscribe(params => {
      this.trainerId = params['trainerId'];
      if (this.trainerId) {
        this.loadCourses();
      }
    });
  }
 
  loadCourses(): void {
    debugger
    this.main.getAllCoursesTC(this.trainerId);
  }

  goback()
  {
this.route2.navigate(['student/viewteacher']);
  }


  
  @ViewChild('bookDailog') callBookDailog!:TemplateRef<any>; 

  openBookDailog(courseId: number, userId: number){
    const dailogResult=this.dialog.open(this.callBookDailog);
    dailogResult.afterClosed().subscribe((result)=>{
     if(result !=undefined){
       if(result=='yes') 
        
         {
          //this.router.navigate(['/paymentform']);
          this.s.CreateBooking(courseId, userId); 
         }
       else 
       console.log('Thank you !');
     }
    })
     }
     ReadMore(courseId: number)
     {
   
       this.route2.navigate([`/student/coursedetails/${courseId}`]);
     }

    }