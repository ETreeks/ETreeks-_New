import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { FooterService } from 'src/app/Services/footer.service';
import { HomeService } from 'src/app/Services/home.service';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  Footer: any = {};
  About: any = {};
  viewT: any[] = [];

  Students : any[] = [];

  constructor(private footerService2: FooterService ,public admin2 : AdminService 
    , public MM:MainService , public home : HomeService ) {}

  ngOnInit(): void {
    this.footerService2.footer$.subscribe(data => {
      if (data.length > 0) {
        this.Footer = data[0];
      }
    });
    this.footerService2.getFooterData();

    this.admin2.about$.subscribe(data => {
      if (data.length > 0) {
        this.About = data[0];
      }
    });
    this.admin2.getAboutData();

    
    //this.MM.getAllCourses();
    this.home.getAllAcceptedCourses();
    this.MM.GetAllCategories();


    this.home.DisplayAllAcceptedTrainers();
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
