import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  constructor(public admin4:AdminService){ 
  }
  ngOnInit(): void {
     this.admin4.DisplayAllStudents();
  }

}
