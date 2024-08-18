import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { MainService } from 'src/app/Services/main.service';
import { CreatecourseComponent } from '../createcourse/createcourse.component';
import { CourseSession } from 'src/Interface/CourseSession ';

@Component({
  selector: 'app-managecourse',
  templateUrl: './managecourse.component.html',
  styleUrls: ['./managecourse.component.css']
})
export class ManagecourseComponent implements OnInit {
  @ViewChild('deleteDailog') callDeleteDailog!: TemplateRef<any>;
  @ViewChild('updateDialog') callUpdateDailog!: TemplateRef<any>;

  pData: any;
  categories: any[] = [];
  trainers: any[] = [];
  courses: any[] = [];
  courseSessions: CourseSession[] = []; 
  _filetrText: string = '';
  currentImageName: string = '';
  updateForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    imagename: new FormControl(''),
    price: new FormControl(''),
    category_Id: new FormControl(''),
    trainer_Id: new FormControl(''),
    passmark: new FormControl(''),
  });

  constructor(
    public mc: MainService, 
    public dialog: MatDialog, 
    public A: AdminService, 
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.mc.getcoursesT();
    this.mc.getAllCategories().subscribe((data: any[]) => {
      this.categories = data.map(category => ({
        id: category.id,
        name: category.categoryname
      }));
    }, err => {
      console.log("Error fetching categories", err);
    });

    this.A.displayAllTrainers().subscribe((data: any[]) => {
      this.trainers = data.map(tra => ({
        id: tra.id,
        name: tra.username
      }));
    }, err => {
      console.log("Error fetching trainers", err);
    });
  }

  openUpdateDailog(course: any) {
    this.dialog.open(this.callUpdateDailog);
    this.pData = course;
    this.currentImageName = course.imagename;
    this.updateForm.controls['id'].setValue(this.pData.id);
  }

  openCreateCourseDailog() {
    this.dialog.open(CreatecourseComponent);
  }

  openDeleteDailog(id: number) {
    const dailogResult = this.dialog.open(this.callDeleteDailog);
    dailogResult.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        if (result === 'yes') 
          this.mc.DeleteCourse(id);
      }
    });
  }

  Update() {
    const updateData = { ...this.updateForm.value };
    if (!updateData.imagename) {
      updateData.imagename = this.currentImageName;
    }
    this.mc.UpdateCourse(updateData);
  }

  uploadImage(file: any) {
    if (file.length === 0) return;
    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.mc.uploadAttachmenet(formData);
  }

  navigateToCourseSession(courseId: number): void {
    this.A.getSessionsByCourse(courseId).subscribe(
      (sessions: CourseSession[]) => {
        this.courseSessions = sessions;
        this.router.navigate(['/trainer/CourseSession'], { queryParams: { courseId: courseId } });
      },
      (error) => {
        console.error('Error fetching sessions:', error);
      }
    );
  }
}
