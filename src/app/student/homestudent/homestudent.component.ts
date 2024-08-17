import { Component } from '@angular/core';

@Component({
  selector: 'app-homestudent',
  templateUrl: './homestudent.component.html',
  styleUrls: ['./homestudent.component.css']
})
export class HomestudentComponent {
  username = String(localStorage.getItem('username')); 
}
