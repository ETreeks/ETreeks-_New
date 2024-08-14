import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-viewteacherstd',
  templateUrl: './viewteacherstd.component.html',
  styleUrls: ['./viewteacherstd.component.css']
})
export class ViewteacherstdComponent implements OnInit {

  constructor(public a : AdminService , private router:Router){}
  
  ngOnInit(): void {
   this.a.DisplayAllTrainers();
  }


  showcourses()
  {
    debugger
    this.router.navigate(['viewtcourses']);
  }




}
