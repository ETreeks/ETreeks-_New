// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { MainService } from 'src/app/Services/main.service';
// import { StudentService } from 'src/app/Services/student.service';

// @Component({
//   selector: 'app-showsession',
//   templateUrl: './showsession.component.html',
//   styleUrls: ['./showsession.component.css']
// })
// export class ShowsessionComponent implements OnInit {

//   courseId: any;
//   courseDetails: any;
//   sessions: any[] = [];

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private mainService: MainService,
//     private studentService: StudentService
//   ) {}

//   ngOnInit(): void {
//     this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
//     this.loadCourseDetails();
//     this.loadSessions();
//   }

//   loadCourseDetails(): void {
//     this.mainService.getCourseDetails(this.courseId).subscribe(details => {
//       this.courseDetails = details;
//     });
//   }

//   loadSessions(): void {
//     this.studentService.getAllCourseSessions().subscribe(sessions => {
//       this.sessions = sessions.filter(session => session.course_Id === this.courseId);
//     });
//   }

//   backToDetails(): void {
//     this.router.navigate(['/student/viewcourse']);
//   }

//   bookCourse(): void {
//     this.router.navigate([`/student/paymentform/${this.courseDetails.price}`], {
//       queryParams: { courseId: this.courseId }
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/Services/main.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-showsession',
  templateUrl: './showsession.component.html',
  styleUrls: ['./showsession.component.css']
})
export class ShowsessionComponent implements OnInit {

  courseId: any;
  courseDetails: any;
  sessions: any[] = [];
  selectedSessionId: number | null = null;
  today: Date = new Date();
  userId: number = Number(localStorage.getItem('Id'));
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
    this.loadCourseDetails();
    this.loadSessions();
  }

  loadCourseDetails(): void {
    this.mainService.getCourseDetails(this.courseId).subscribe(details => {
      this.courseDetails = details;
    });
  }

  loadSessions(): void {
    this.studentService.getAllCourseSessions().subscribe(sessions => {
      this.sessions = sessions.filter(session => session.course_Id === this.courseId);
    });
  }
  isBookingDisabled(sessionDate: string): boolean {
    const today = new Date();
    const sessionEndDate = new Date(sessionDate);
    return sessionEndDate < today; 
  }

  backToDetails(): void {
    this.router.navigate(['/student/viewcourse']);
  }

  bookCourse(sessionId: number): void {
    this.router.navigate(['/student/paymentform', this.courseDetails.price], {
      queryParams: { courseId: this.courseId, sessionId: sessionId }
    });
  }
  // loadSessions(): void {
  //   this.studentService.getAllCourseSessions().subscribe(sessions => {
  //     this.sessions = sessions.filter(session => session.course_Id === this.courseId);
  //     this.sessions.forEach(session => {
  //       this.studentService.checkBooking(session.id, this.userId).subscribe(isBooked => {
  //         session.isBooked = isBooked;
  //       });
  //     });
  //   });
  // }
  
}
