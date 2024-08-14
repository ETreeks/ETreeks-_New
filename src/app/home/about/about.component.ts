import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit {
  
  
  
  About: any = {};

  constructor(private adminabout: AdminService) {}

  ngOnInit(): void {
    this.adminabout.about$.subscribe(data => {
      if (data.length > 0) {
        this.About = data[0];
      }
    });
    this.adminabout.getAboutData();
  }
}{

}
