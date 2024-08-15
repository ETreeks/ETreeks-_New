import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { HttpClient } from '@angular/common/http';

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

  trainerName: string = '';  // For the search input
  trainers: any[] = [];      // Store search results
  searchCompleted: boolean = false;  // To track if search is done
  noResults: boolean = false;  // To handle no results found

  constructor(public admin3: AdminService, private http: HttpClient) { }

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

  searchTrainers() {
    if (this.trainerName.trim() === '') {
      console.log('Search name is empty');
      this.noResults = false;  // Reset noResults flag
      return; // Do not perform the search if the input is empty
    }

    const url = `https://localhost:7281/api/Admin/SearchTrainerByName?trainerName=${this.trainerName}`;
    console.log('Making API call to:', url);

    this.http.get<any[]>(url).subscribe(
      (data: any[]) => {
        console.log('API response:', data); // Debugging log
        this.trainers = data;
        this.noResults = data.length === 0;  // Set noResults if no trainers are found
        this.searchCompleted = true;
      },
      error => {
        console.error('API error:', error);
        this.trainers = [];
        this.noResults = true;  // Handle error as no results
        this.searchCompleted = true;
      }
    );
  }
}
