import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/Services/trainer.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

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
  reservations: any[] = []; // Array to hold reservations data

  constructor(private trainerService: TrainerService, private authService: AuthService,private router:Router) {}

  ngOnInit(): void {
    this.loadDashboardData();
    this.loadReservations(); 
    this.loadTrainerProfile();
    // Fetch reservations data
  }
  loadTrainerProfile(): void {
    const trainerId = this.authService.getTrainerIdFromToken();
    if (trainerId) {
      this.trainerService.viewProfile(trainerId).subscribe(
        profile => {
          if (profile) {
            this.trainerName = `${profile.fname} ${profile.lname}`;
          }
        },
        error => console.error('Error fetching profile', error)
      );
    } else {
      console.error('Trainer ID could not be retrieved from token.');
    }
  }
  loadDashboardData(): void {
    const trainerId = this.authService.getTrainerIdFromToken();
    if (trainerId !== null) {
      this.trainerService.getTrainer(trainerId).subscribe(
        (data: any) => {
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
  
  loadReservations(): void {
    this.trainerService.getallreservationT().subscribe(
      (data: any[]) => {
        this.reservations = data;
      },
      (error) => {
        console.error('Error loading reservations', error);
      }
    );
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['auth/login']);

  }
}
