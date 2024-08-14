import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RegistrationRequestComponent } from './registrationrequest/registrationrequest.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewTrainerComponent } from './view-trainer/view-trainer.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ManagecoursesComponent } from './managecourses/managecourses.component';
import { ManagecategoriesComponent } from './managecategories/managecategories.component';
import { EdithomeComponent } from './edithome/edithome.component';
import { EditaboutComponent } from './editabout/editabout.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { SharedModule } from '../shared/shared.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { SearchdatesComponent } from './searchdates/searchdates.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ManagetestimonialsComponent } from './managetestimonials/managetestimonials.component';
import { ReportComponent } from './report/report.component';
import { ChartComponent } from './chart/chart.component';
import { ChartDComponent } from './chart-d/chart-d.component';
import { GetProfileAdminComponent } from './get-profile-admin/get-profile-admin.component';
import { SearchtrainerComponent } from './searchtrainer/searchtrainer.component';
import { FormsModule } from '@angular/forms';
import { GetTrainerEmailComponent } from './get-trainer-email/get-trainer-email.component';




@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    StatisticsComponent,
    RegistrationRequestComponent,
    ViewUsersComponent,
    ViewTrainerComponent,
    ViewStudentComponent,
    ManagecoursesComponent,
    ManagecategoriesComponent,
    EdithomeComponent,
    EditaboutComponent,
    ViewcontactComponent,
    CreateCategoryComponent,
    CreateCourseComponent,
    SearchdatesComponent,
    ManagetestimonialsComponent,
    ReportComponent,
    ChartComponent,
    ChartDComponent,
    GetProfileAdminComponent,
    SearchtrainerComponent,
    GetTrainerEmailComponent
    

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
    
  ],
  exports: [
    ChartComponent
  ]
})
export class AdminModule { }
