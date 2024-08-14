import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/Services/trainer.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-dashboardtrainer',
  templateUrl: './dashboardtrainer.component.html',
  styleUrls: ['./dashboardtrainer.component.css']
})
export class DashboardtrainerComponent implements OnInit {
  trainerName = ''; // Will be updated dynamically
  totalSessions = 0;
  totalCourses = 0;
  upcomingReservations = 0;
  recentActivities: any[] = [];
  upcomingSessions: any[] = [];

  constructor(private trainerService: TrainerService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    const trainerId = this.authService.getTrainerIdFromToken();
    console.log('Trainer ID from token:', trainerId); // Debugging line
  
    if (trainerId !== null) {
      this.trainerService.getTrainer(trainerId).subscribe(
        (data: any) => {
          console.log('Data received:', data); // Debugging line
          this.trainerName = data.name;
          this.totalSessions = data.totalSessions;
          this.totalCourses = data.totalCourses;
          this.upcomingReservations = data.upcomingReservations;
          this.recentActivities = data.recentActivities;
          this.upcomingSessions = data.upcomingSessions;
        },
        (error) => {
          console.error('Error loading dashboard data', error);
        }
      );
    } else {
      console.error('Trainer ID is null or token is invalid.');
    }
  }
  
}
