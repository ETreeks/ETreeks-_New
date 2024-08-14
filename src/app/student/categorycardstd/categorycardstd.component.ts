import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-categorycardstd',
  templateUrl: './categorycardstd.component.html',
  styleUrls: ['./categorycardstd.component.css']
})
export class CategorycardstdComponent implements OnInit {
  constructor(public ad:AdminService){}

  ngOnInit(): void {
    this.ad.TotalCoursesInEachCategory();

    
  }
  @Input() category: any;
}
