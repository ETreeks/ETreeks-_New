import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  constructor(public admin:AdminService ,private toster : ToastrService){ 
  }
  ngOnInit(): void {
    this.admin.getAllRegisteredTrainers();
    this.admin.getAllRegisteredStudents();
    this.admin.getAllUsers();
    this.admin.getCountAdmin();
    this.admin.getCountPendingTrainers();
    this.admin.GetCountAcceptedTrainers();
    this.admin.GetCountCategories();
    this.admin.GetCountCourses();
   // this.admin.TotalStudentInEachCourse();
    this.admin.TotalCoursesInEachCategory();
    //this.admin.TotalStudentsPerTrainer();
    //this.admin.getStudentsPerTrainer();
    this.admin.GetCountPendingReservation();
    this.admin.GetCountAcceptedReservation();
    this.toster.success('statistics data retrieved successfully');
  }
  

}
