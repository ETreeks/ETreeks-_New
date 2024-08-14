import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CourseComponent } from './course/course.component';
import { TrainerComponent } from './trainer/trainer.component';

const routes: Routes = [
  {
    path:'default',
    component:DefaultComponent
  },
  {
    path:'',
    component:DefaultComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'testimonial',
    component:TestimonialComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'trainerstd',
    component:TrainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
