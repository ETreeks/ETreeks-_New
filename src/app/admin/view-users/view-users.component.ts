import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  constructor(public admin2:AdminService){ 
  }
  ngOnInit(): void {
   this.admin2.DisplayAllUsers();
  }

}
