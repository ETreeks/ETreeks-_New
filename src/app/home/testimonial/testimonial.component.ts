import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(public home : HomeService , public admin2 :AdminService){}
  Students : any[] = [];

  ngOnInit(): void {
    this.home.getAllAcceptedTestimonial();


    this.admin2.DisplayAllStudents2().subscribe((data: any[]) => {
      this.Students = data.map(std => ({
        id: std.id,
        name: std.username
      }));
      console.log(this.Students);
    }, err => {
      console.log("Error fetching Students ", err);
    });

  }
  getUsernameById(userId: number): string {
    const user = this.Students.find(student => student.id === userId);
    return user ? user.name : 'Unknown User';
  }
  }


