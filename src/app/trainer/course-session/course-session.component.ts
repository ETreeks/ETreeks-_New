import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseSessionComponent } from '../create-course-session/create-course-session.component';
import { TrainerService } from 'src/app/Services/trainer.service';
import { ActivatedRoute } from '@angular/router';
import { CourseSession } from 'src/Interface/CourseSession ';

@Component({
  selector: 'app-course-session',
  templateUrl: './course-session.component.html',
  styleUrls: ['./course-session.component.css']
})
export class CourseSessionComponent implements OnInit {
  courseSessions: CourseSession[] = [];

  updateForm: FormGroup = new FormGroup({
    Id: new FormControl(''),
    Name: new FormControl(''),
    Startdate: new FormControl(''),
    Enddate: new FormControl(''),
    AvailableStatus: new FormControl(''),
    CourseId: new FormControl(''),
  });

  @ViewChild('deleteDailog') callDeleteDailog!: TemplateRef<any>;
  @ViewChild('updateDailog') callupdateDailog!: TemplateRef<any>;
  pData: any;

  constructor(public TService: TrainerService, public dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const courseId = params['courseId'];
      if (courseId) {
        this.loadCourseSessions(+courseId);
      }
    });
  }

  loadCourseSessions(courseId: number): void {
    this.TService.getSessionsByCourse(courseId).subscribe(
      (sessions: CourseSession[]) => {
        this.courseSessions = sessions;
      },
      error => {
        console.error('Error fetching course sessions:', error);
      }
    );
  }

  openUpdateDailog(courseSession: CourseSession): void {
    this.dialog.open(this.callupdateDailog);
    this.pData = courseSession;
    this.updateForm.setValue({
      Id: this.pData.id,
      Name: this.pData.name,
      Startdate: this.pData.startDate,
      Enddate: this.pData.endDate,
      AvailableStatus: this.pData.availableStatus,
      CourseId: this.pData.courseId,
    });
  }

  update(): void {
    if (this.updateForm.valid) {
      this.TService.updateCourseSession(this.updateForm.value).subscribe(
        () => {
          console.log('Course session updated successfully');
          this.loadCourseSessions(this.updateForm.value.CourseId);
        },
        error => {
          console.error('Error updating course session:', error);
        }
      );
    }
  }

  openDeleteDailog(id: number): void {
    const dialogResult = this.dialog.open(this.callDeleteDailog);
    dialogResult.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.TService.deleteCourseSession(id).subscribe(
          () => {
            console.log('Course session deleted successfully');
            this.loadCourseSessions(this.updateForm.value.CourseId);
          },
          error => {
            console.error('Error deleting course session:', error);
          }
        );
      }
    });
  }

  openCreateDailog(): void {
    this.dialog.open(CreateCourseSessionComponent);
  }
}
