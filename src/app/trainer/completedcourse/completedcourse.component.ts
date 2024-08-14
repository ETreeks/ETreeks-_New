import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Guser, StudentService } from 'src/app/Services/student.service';
import { Reservation, TrainerService } from 'src/app/Services/trainer.service';

@Component({
  selector: 'app-completedcourse',
  templateUrl: './completedcourse.component.html',
  styleUrls: ['./completedcourse.component.css']
})
export class CompletedcourseComponent implements OnInit {

  constructor(public t:TrainerService ,public dialog: MatDialog ,public s :StudentService){}
  reservations: Reservation[] = [];
  gusers: Guser[] = [];


  ngOnInit(): void {
  this.t.getallreservationstd3();


  this.t.getAllUsers2().subscribe((data: any[]) => {
    this.gusers = data.map(GU => ({
      id: GU.id,
      fname: GU.fname,
      lname:GU.lname
    }));
    console.log(this.gusers); 
  }, err => {
    console.log("Error fetching gusers", err);
  });

  }

  getUserName(userId: number): string {
    const user = this.gusers.find(guser => guser.id === userId);
    return user ? `${user.fname} ${user.lname}` : 'Unknown User';
  }


  CompletedCourse(id :number)
  {
  this.t.completedYes(id);
  }

}


    
 