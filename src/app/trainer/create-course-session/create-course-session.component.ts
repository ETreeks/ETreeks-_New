import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { TrainerService } from 'src/app/Services/trainer.service';

@Component({
  selector: 'app-create-course-session',
  templateUrl: './create-course-session.component.html',
  styleUrls: ['./create-course-session.component.css']
})
export class CreateCourseSessionComponent {
  constructor(public TService:TrainerService){}
  createCourseSession:FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required), 
    Startdate:new FormControl(), 
    Enddate:new FormControl(), 
    AvailableStatus:new FormControl(), 
    CourseId:new FormControl()
  })
  save(){
    debugger;
    this.TService.createCourseSession(this.createCourseSession.value);
  }
}
