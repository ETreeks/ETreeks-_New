import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-managetestimonials',
  templateUrl: './managetestimonials.component.html',
  styleUrls: ['./managetestimonials.component.css']
})
export class ManagetestimonialsComponent implements OnInit {

  constructor(public A:AdminService ,public dialog: MatDialog){}

  ngOnInit(): void {
   this.A.getAllTestimonial();
  }
  @ViewChild('deleteDailog') callDeleteDailog!: TemplateRef<any>;


  openDeleteDailog(id:number){
    debugger
    const dailogResult=this.dialog.open(this.callDeleteDailog);
    dailogResult.afterClosed().subscribe((result)=>{
     if(result !=undefined){
       if(result=='yes')
         this.A.DeleteTestimonial(id); 
       else 
       console.log('Thank you !');
     }
    })
     }

     AcceptTest(id :number)
     {
     this.A.AcceptTest(id);
     }
 

}
