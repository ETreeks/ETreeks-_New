import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TrainerRoutingModule } from './trainer-routing.module';
import { SidebartrainerComponent } from './sidebartrainer/sidebartrainer.component';
import { ManagesessionsComponent } from './managesessions/managesessions.component';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

import { EditprofileComponent } from './editprofile/editprofile.component';
import { DeleteprofileComponent } from './deleteprofile/deleteprofile.component';
import { ManagereservationComponent } from './managereservation/managereservation.component';
import { SearchdatesComponent } from './searchdates/searchdates.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { CategorycardComponent } from './categorycard/categorycard.component';
import { DashboardtrainerComponent } from './dashboardtrainer/dashboardtrainer.component';
import { HometrainerComponent } from './hometrainer/hometrainer.component';
import { SharedModule } from '../shared/shared.module';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CompletedcourseComponent } from './completedcourse/completedcourse.component';
import { LecturerequestComponent } from './lecturerequest/lecturerequest.component';
import { CreateCourseSessionComponent } from './create-course-session/create-course-session.component';
import { CourseSessionComponent } from './course-session/course-session.component';

@NgModule({
  declarations: [
    SidebartrainerComponent,
    ManagesessionsComponent,
    ManagecourseComponent,
    CreatecourseComponent,
    ViewprofileComponent,
    EditprofileComponent,
    DeleteprofileComponent,
    ManagereservationComponent,
    SearchdatesComponent,
    ViewcategoryComponent,
    CategorycardComponent,
    DashboardtrainerComponent,
    HometrainerComponent,
    AddlocationComponent,
      FileUploadComponent,
    AddlocationComponent,
    CompletedcourseComponent,
    LecturerequestComponent,
    CreateCourseSessionComponent,
    CourseSessionComponent
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    SharedModule
  ]
})
export class TrainerModule { }
