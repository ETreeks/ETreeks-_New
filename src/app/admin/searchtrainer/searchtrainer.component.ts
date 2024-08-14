import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchtrainer',
  templateUrl: './searchtrainer.component.html',
  styleUrls: ['./searchtrainer.component.css']
})
export class SearchtrainerComponent {

  trainerName: string = '';  // Bind to input field
  trainers: any[] = [];      // Store search results
  searchCompleted: boolean = false;  // To track if search is done
  noResults: boolean = false;  // To handle no results found

  constructor(private http: HttpClient) {}

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
