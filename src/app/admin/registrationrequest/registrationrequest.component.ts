import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { ProfileTrainerDTO } from 'src/app/dtos/profile-trainer.dto';

@Component({
  selector: 'app-registrationrequest',
  templateUrl: './registrationrequest.component.html',
  styleUrls: ['./registrationrequest.component.css']
})
export class RegistrationRequestComponent implements OnInit {
  pendingTrainers: ProfileTrainerDTO[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadPendingTrainers();
  }

  loadPendingTrainers(): void {
    this.adminService.getAllPendingTrainers2().subscribe(
      (data) => {
        console.log('Pending trainers:', data);
        this.pendingTrainers = data;
      },
      (error) => {
        console.error('Error fetching pending trainers', error);
      }
    );
  }

  approveTrainer(id: number): void {
    this.adminService.approveTrainer(id).subscribe(
      () => {
        this.loadPendingTrainers(); // Refresh the list of trainers after approval
      },
      (error) => {
        console.error('Error approving trainer', error);
      }
    );
  }
  

  removeTrainer(id: number): void {
    this.adminService.removeTrainer(id).subscribe(
      () => {
        this.loadPendingTrainers();
      },
      (error) => {
        console.error('Error removing trainer', error);
      }
    );
  }
}
