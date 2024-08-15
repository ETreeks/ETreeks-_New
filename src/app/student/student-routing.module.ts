import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomestudentComponent } from './homestudent/homestudent.component';
import { ViewcategorystdComponent } from './viewcategorystd/viewcategorystd.component';
import { ViewcoursestdComponent } from './viewcoursestd/viewcoursestd.component';
import { ViewteacherstdComponent } from './viewteacherstd/viewteacherstd.component';
import { HistorystdComponent } from './historystd/historystd.component';
import { TestimonialstdComponent } from './testimonialstd/testimonialstd.component';
import { ViewprofilestdComponent } from './viewprofilestd/viewprofilestd.component';
import { EditprofilestdComponent } from './editprofilestd/editprofilestd.component';
import { DeleteprofilestdComponent } from './deleteprofilestd/deleteprofilestd.component';
import { SearchsessioncourseComponent } from './searchsessioncourse/searchsessioncourse.component';
import { ViewtrainercoursesComponent } from './viewtrainercourses/viewtrainercourses.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ViewtcoursesComponent } from './viewtcourses/viewtcourses.component';
import { WeatherComponent } from './weather/weather.component';
import { HistoryComponent } from './history/history.component';
import { ShowsessionComponent } from './showsession/showsession.component';
import { MapStudentComponent } from './map-student/map-student.component';

const routes: Routes = [
  {
    path:'',
    component:HomestudentComponent
  }
  ,
  {
    path:'viewcategory',
    component:ViewcategorystdComponent
  },
  {
    path:'viewcourse',
    component:ViewcoursestdComponent
  },
  {
    path:'viewteacher',
    component:ViewteacherstdComponent
  },
  // {
  //   path:'history',
  //   component:HistorystdComponent
  // },
  {
    path:'testimonial',
    component:TestimonialstdComponent
  },
  {
    path:'viewprofile',
    component:ViewprofilestdComponent
  },
  {
    path:'editprofile',
    component:EditprofilestdComponent
  },
  {
    path:'deleteprofile',
    component:DeleteprofilestdComponent
  }
  ,
  {
    path:'searchsessioncourse',
    component:SearchsessioncourseComponent
  }
  , {
    path:'viewtcourses',
    //component:ViewtrainercoursesComponent
    component:ViewtcoursesComponent
  }
  ,{
    path:'paymentform/:id',
    component:PaymentformComponent
  } ,{
    path:'mycourses',
    component:MycoursesComponent
  }
  ,{
    path:'coursedetails/:id',
    component:CoursedetailsComponent
  },
  {
    path:'weather',
    component:WeatherComponent
  },
  {
    path:'MapStudent',
    component:MapStudentComponent
  },
  {
    path:'history',
    component:HistoryComponent
  }
  ,
  {
    path:'showsession',
    component:ShowsessionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
