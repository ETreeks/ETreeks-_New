import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-trainer',
  templateUrl: './view-trainer.component.html',
  styleUrls: ['./view-trainer.component.css']
})
export class ViewTrainerComponent implements OnInit {

  statusOptions = [
    { value: 'Approved', label: 'Approved' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Rejected', label: 'Rejected' }
  ];

  constructor(public admin3: AdminService) { }

  ngOnInit(): void {
    this.admin3.DisplayAllTrainers();
  }

  onStatusChange(trainer: any, newStatus: string): void {
    console.log('Trainer ID:', trainer.id, 'New Status:', newStatus);
    this.admin3.acceptProfileAdmin(trainer.id, newStatus).subscribe({
      next: () => {
        console.log(`Status updated successfully for trainer ID: ${trainer.id}`);
        trainer.Registration_Status_Trainer = newStatus;
      },
      error: (err) => {
        console.error(`Error updating status for trainer ID: ${trainer.id}`, err);
      }
    });
  }

  getStatusLabel(value: string): string {
    const status = this.statusOptions.find(status => status.value == value);
    return status ? status.label : 'Update status menu';
  }
}
