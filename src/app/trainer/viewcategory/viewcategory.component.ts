import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {


  constructor(public m :MainService){}

  ngOnInit(): void {
   this.m.GetAllCategories();
  }

}
