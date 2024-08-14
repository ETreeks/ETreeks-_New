import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { ManagereservationComponent } from './managereservation/managereservation.component';
import { ManagesessionsComponent } from './managesessions/managesessions.component';
import { SearchdatesComponent } from './searchdates/searchdates.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DeleteprofileComponent } from './deleteprofile/deleteprofile.component';
import { DashboardtrainerComponent } from './dashboardtrainer/dashboardtrainer.component';
import { CompletedcourseComponent } from './completedcourse/completedcourse.component';
import { LecturerequestComponent } from './lecturerequest/lecturerequest.component';
import { CourseSessionComponent } from './course-session/course-session.component';

const routes: Routes = [

  {
    path:'dashboardt',
    component:DashboardtrainerComponent
  },
  {
    path:'managecourse',
    component:ManagecourseComponent
  },
  {
    path:'managereservation',
    component:ManagereservationComponent
  },
  {
    path:'managesession',
    component:ManagesessionsComponent
  },
  {
    path:'searchdate',
    component:SearchdatesComponent
  },
  {
    path:'viewcategory',
    component:ViewcategoryComponent
  },
  {
    path:'viewprofile',
    component:ViewprofileComponent
  },
  {
    path:'editprofile',
    component:EditprofileComponent
  },
  {
    path:'deleteprofile',
    component:DeleteprofileComponent
  } ,
  {
    path:'completed',
    component:CompletedcourseComponent
  },
  {
    path:'CourseSession',
    component:CourseSessionComponent
  },
  {
    path:'lecture',
    component:LecturerequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
