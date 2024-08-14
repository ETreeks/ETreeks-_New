import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-get-trainer-email',
  templateUrl: './get-trainer-email.component.html',
  styleUrls: ['./get-trainer-email.component.css']
})
export class GetTrainerEmailComponent {
  trainerId: number | undefined;
  email: string | undefined;
  submitted = false;

  constructor(private adminService: AdminService) {}

  onSubmit(): void {
    if (this.trainerId !== undefined) {
      this.adminService.getTrainerEmail(this.trainerId).subscribe(
        (email) => {
          this.email = email;
          this.submitted = true;
        },
        (error) => {
          console.error('Error fetching trainer email:', error);
          this.email = 'Error retrieving email';
          this.submitted = true;
        }
      );
    }
  }
}
