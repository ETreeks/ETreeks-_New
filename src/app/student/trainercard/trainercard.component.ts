import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-trainercard',
  templateUrl: './trainercard.component.html',
  styleUrls: ['./trainercard.component.css']
})
export class TrainercardComponent {

  constructor(public main : MainService , private router  :Router){}
  @Input() Tobject : any ;
//@Output() Hala = new EventEmitter ();

  viewCourses(trainerId: number ) {
   this.main.getAllCoursesTC(trainerId);
   //this.router.navigate(['student/viewtrainercourses']);
   this.router.navigate(['student/viewtcourses'], { queryParams: { tID: trainerId } });
   // this.Hala.emit(this.Tobject.id);
      
  console.log('Trainer ID:', trainerId);

  }


 }
 