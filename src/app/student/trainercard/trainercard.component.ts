import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-trainercard',
  templateUrl: './trainercard.component.html',
  styleUrls: ['./trainercard.component.css']
})
export class TrainercardComponent {
  @Input() Tobject: any;
  @Output() locationRequested = new EventEmitter<number>();

  constructor(public main: MainService, private router: Router) {}

  // Method to view courses of the trainer
  viewCourses(trainerId: number) {
    this.main.getAllCoursesTC(trainerId);
    this.router.navigate(['student/viewtcourses'], { queryParams: { tID: trainerId } });
    console.log('Trainer ID:', trainerId);
  }

  // Method to request location of the trainer
  viewLocation(trainerId: number) {
    this.locationRequested.emit(trainerId);
    console.log('Requested location for Trainer ID:', trainerId);
  }
}
