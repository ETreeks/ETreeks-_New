import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {
  constructor(public admincontact:AdminService , public dialog: MatDialog){ 
  }


  @ViewChild('deleteDailog') callDeleteDailog!:TemplateRef<any>; 
  
  openDeleteDailog(id:number){
 const dailogResult=this.dialog.open(this.callDeleteDailog);
 dailogResult.afterClosed().subscribe((result)=>{
  if(result !=undefined){
    if(result=='yes') 
      this.admincontact.DeleteContact(id); 
    else 
    console.log('Thank you !');
  }
 })
  }


  ngOnInit(): void {
   this.admincontact.DisplayAllContacts();
   
  }

}
