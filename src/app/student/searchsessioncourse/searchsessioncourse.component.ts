import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { StudentService, SessionDTO } from 'src/app/Services/student.service';

@Component({
  selector: 'app-searchsessioncourse',
  templateUrl: './searchsessioncourse.component.html',
  styleUrls: ['./searchsessioncourse.component.css']
})
export class SearchsessioncourseComponent implements OnInit {
  sessions: SessionDTO[] = [];
  trainers: string[] = []; // Array to hold trainer usernames
  selectedTrainerUsername: string = ''; // Store the selected trainer username

  constructor(private studentService: StudentService, private homeService: HomeService) { }

  ngOnInit(): void {
    this.fetchTrainers();
  }

  fetchTrainers(): void {
    this.homeService.DisplayAllAcceptedTrainers2().subscribe(
      (data: any[]) => {
        // Extract usernames only
        this.trainers = data.map(trainer => trainer.username);
      },
      (error) => {
        console.error('Error fetching trainers', error);
      }
    );
  }

  onTrainerChange(): void {
    // Automatically search when the trainer selection changes
    this.searchSessions();
  }

  searchSessions(): void {
    if (this.selectedTrainerUsername) {
      this.studentService.getTrainerSessionsByUsername(this.selectedTrainerUsername).subscribe(
        (data: SessionDTO[]) => {
          this.sessions = data;
        },
        (error) => {
          console.error('Error fetching sessions', error);
        }
      );
    } else {
      // If no trainer is selected, you might want to clear the sessions or show all sessions
      this.sessions = [];
    }
  }

  // onSearch(): void {
  //   this.searchSessions();
  // }

  onClear(): void {
    this.selectedTrainerUsername = ''; // Clear the selected trainer
    this.sessions = []; // Clear the sessions list or reset to show all sessions
  }
}

 
