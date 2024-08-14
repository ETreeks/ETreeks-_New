import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-viewcategorystd',
  templateUrl: './viewcategorystd.component.html',
  styleUrls: ['./viewcategorystd.component.css']
})
export class ViewcategorystdComponent implements OnInit {


  constructor(public m :MainService){}

  ngOnInit(): void {
   this.m.GetAllCategories();
  }

}
