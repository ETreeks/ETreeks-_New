import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { ManagetestimonialsComponent } from './managetestimonials/managetestimonials.component';
import { ReportComponent } from './report/report.component';
import { ChartComponent } from './chart/chart.component';
import { GetProfileAdminComponent } from './get-profile-admin/get-profile-admin.component';
import { SearchtrainerComponent } from './searchtrainer/searchtrainer.component';
import { GetTrainerEmailComponent } from './get-trainer-email/get-trainer-email.component';


const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'statistics',
    component:StatisticsComponent
  },
  {
    path:'registrationrequest',
    component:RegistrationRequestComponent
  },
  {
    path:'allusers',
    component:ViewUsersComponent
  },
  {
    path:'alltrainer',
    component:ViewTrainerComponent
  },
  {
    path:'allstudent',
    component:ViewStudentComponent
  },
  {
    path:'managecourses',
    component:ManagecoursesComponent
  },
  {
    path:'managecategories',
    component:ManagecategoriesComponent
  },
  {
    path:'edithome',
    component:EdithomeComponent
  },
  {
    path:'editabout',
    component:EditaboutComponent
  },
  {
    path:'viewcontact',
    component:ViewcontactComponent
  },

  {
    path:'testimonial',
    component:ManagetestimonialsComponent
  }
  ,
  {
    path:'report',
    component:ReportComponent
  } ,
  {
    path:'GPA',
    component:GetProfileAdminComponent
  } ,
  {
    path:'searchtrainer',
    component:SearchtrainerComponent
  },
  { path: 'get-trainer-email',
     component: GetTrainerEmailComponent },


  {
    path:'chart',
    component:ChartComponent
  }
  // ,
  // {
  //   path:'searchtrainer',
  //   component:SearchtrainerComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
