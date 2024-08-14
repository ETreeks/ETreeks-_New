import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebartrainer',
  templateUrl: './sidebartrainer.component.html',
  styleUrls: ['./sidebartrainer.component.css']
})
export class SidebartrainerComponent {

constructor(private router:Router){}
  logout(){
    localStorage.clear();
    this.router.navigate(['auth/login']);

  }
}
