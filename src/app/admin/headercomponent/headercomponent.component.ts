import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit{
  constructor(public admin:AdminService ){ 
  }
  ngOnInit(): void {
    this.admin.getAllRegisteredTrainers();
    this.admin.getAllRegisteredStudents();
    this.admin.GetCountAcceptedTrainers();
    this.admin.getCountPendingTrainers();

  }

  
}
