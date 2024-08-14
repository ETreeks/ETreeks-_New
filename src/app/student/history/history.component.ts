// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-history',
//   templateUrl: './history.component.html',
//   styleUrls: ['./history.component.css']
// })
// export class HistoryComponent {

// }

// import { Component, OnInit } from '@angular/core';
// import { StudentService } from 'src/app/Services/student.service';


// @Component({
//   selector: 'app-history',
//   templateUrl: './history.component.html',
//   styleUrls: ['./history.component.css']
// })
// export class HistoryComponent implements OnInit {
//   AllReviewH: any[] = [];
//   AllTestH: any[] = [];

//   constructor(private studentService: StudentService) {}

//   ngOnInit(): void {
//     this.getAllReviewsH();
//     this.getAllTestH();
//   }

//   getAllReviewsH() {
//     this.studentService.getAllReviewsH();
//   }

//   getAllTestH() {
//     this.studentService.getAllTestH();
// }
// }

import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  AllReviewH: any[] = [];
  AllTestH: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getAllReviewsH();
    this.getAllTestH();
  }

  getAllReviewsH() {
    this.studentService.getAllReviewsH().subscribe(
      (reviews: any[]) => {
        this.AllReviewH = reviews;
      },
      (error) => {
        console.error('Failed to load reviews', error);
      }
    );
  }

  getAllTestH() {
    this.studentService.getAllTestH().subscribe(
      (testimonials: any[]) => {
        this.AllTestH = testimonials;
      },
      (error) => {
        console.error('Failed to load testimonials', error);
      }
    );
  }
}
