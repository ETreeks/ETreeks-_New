import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { StudentModule } from './student/student.module';
import { RouterModule } from '@angular/router'; // Ensure this import is present

//import { CoursesearchPipe } from './Pipes/coursesearch.pipe';
//import { CategorysearchPipe } from './Pipes/categorysearch.pipe';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    StudentModule,
    RouterModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
