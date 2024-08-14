// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-managereservation',
//   templateUrl: './managereservation.component.html',
//   styleUrls: ['./managereservation.component.css']
// })
// export class ManagereservationComponent {

// }
import { Component , OnInit} from '@angular/core';
import { TrainerService ,Reservation ,Course, Guser, ReservationDate2} from 'src/app/Services/trainer.service';
import { forkJoin } from 'rxjs';
 
@Component({
  selector: 'app-managereservation',
  templateUrl: './managereservation.component.html',
  styleUrls: ['./managereservation.component.css']
})
export class ManagereservationComponent implements OnInit {
 
  //reservations: Reservation[] = [];
  courses: Course[] = [];
  gusers: Guser[] = [];
  //trainerId: number = 10;
  trainerId: number = Number(localStorage.getItem('Id'));
  reservations: ReservationDate2[] = [];
  filteredReservations: ReservationDate2[] = [];
 
  constructor(private TrainerService: TrainerService) {}
  ngOnInit(): void {
   // this.loadReservations();
   this.TrainerService.getallreservationTT().subscribe(
    data => {
      this.reservations = data;
      this.filteredReservations = [...this.reservations]; 
    },
    error => {
      console.error('Error retrieving reservations', error);
    }
  );
}
  

  // loadReservations(): void {
  //   const trainerId = Number(localStorage.getItem('Id'));
 
  //   forkJoin([
  //     this.TrainerService.getAllReservations2(),
  //     this.TrainerService.GetAllCourses(),
  //     this.TrainerService.getAllUsers()
  //   ]).subscribe(([reservations, courses, gusers]) => {
  //     console.log('Reservations:', reservations);
  //     console.log('Courses:', courses);
  //     console.log('Users:', gusers);
  //     const trainerCourses = courses.filter(course => course.trainer_Id=== trainerId);
  //     console.log('Trainer Courses:', trainerCourses);
 
  //     this.reservations = reservations.filter(reservation =>
  //       trainerCourses.some(course => course.id === reservation.course_Id)
  //     );
 
  //     this.courses = courses;
  //     this.gusers = gusers;
 
  //     this.reservations.forEach(reservation => {
  //       reservation.courses = this.courses.find(course => course.id === reservation.course_Id) || { id: 0, name: 'Unknown', trainer_Id: 0 };
  //       reservation.gusers = this.gusers.find(user => user.id === reservation.gusers_Id) || { id: 0, fname: 'Unknown', lname: 'Unknown' };
  //     });
  //   }, error => {
  //     console.error('Error fetching reservations or related data', error);
  //   });
  // }
  
  acceptReservation1(id :number)
  {
  this.TrainerService.acceptReservation(id);
  }

  
 
  // rejectReservation(id: number): void {
  //   this.TrainerService.rejectReservation(id).subscribe(
  //     () => {
  //       this.loadReservations();
  //     },
  //     error => {
  //       console.error('Error rejecting reservation', error);
  //     }
  //   );
  //   window.location.reload();
  // }
}