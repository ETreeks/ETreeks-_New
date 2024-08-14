import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  constructor(public ad:AdminService){}

  ngOnInit(): void {
    this.ad.TotalCoursesInEachCategory();

    
  }
  @Input() category: any;
}
