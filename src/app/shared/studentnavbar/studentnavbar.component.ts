import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignalRService } from 'src/app/Services/signal-r.service';
import { StudentService } from 'src/app/Services/student.service';


@Component({
  selector: 'app-studentnavbar',
  templateUrl: './studentnavbar.component.html',
  styleUrls: ['./studentnavbar.component.css']
})
export class StudentnavbarComponent implements OnInit {
  notifications: string[] = [];

  notifications2: any[] = []; 
  constructor(private notificationService :StudentService,private router: Router, public signalrService: SignalRService , public dialog :MatDialog ) {}

  ngOnInit(): void {
    this.notifications = this.signalrService.notifications;
   // this.signalrService.notifications.push('Test Notification'); // For testing
   
   const userId = Number(localStorage.getItem('Id'));
   this.notificationService.getNotifications(userId).subscribe(notifications => {
     this.notifications2 = notifications;
    
   });
   }

  logout() {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
  markAsRead(index: number): void {
    this.notifications.splice(index, 1);
    
  }


}
