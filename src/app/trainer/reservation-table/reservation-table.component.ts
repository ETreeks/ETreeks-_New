import { Component , OnInit} from '@angular/core';
import { TrainerService ,Reservation ,Course, Guser, ReservationDate2} from 'src/app/Services/trainer.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent implements OnInit {
 
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
 
  
  acceptReservation1(id :number)
  {
  this.TrainerService.acceptReservation(id);
  }

  
 
}