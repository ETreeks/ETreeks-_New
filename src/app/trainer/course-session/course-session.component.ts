import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseSessionComponent } from '../create-course-session/create-course-session.component';
import { TrainerService } from 'src/app/Services/trainer.service';

@Component({
  selector: 'app-course-session',
  templateUrl: './course-session.component.html',
  styleUrls: ['./course-session.component.css']
})
export class CourseSessionComponent implements OnInit {
  ngOnInit(): void {
    this.TService.getAllCourseSession();
  }
  updateForm :FormGroup = new FormGroup({
    Id: new FormControl(),
    Name:new FormControl(),
    Startdate: new FormControl(''), 
    Enddate:new FormControl(), 
    AvailableStatus:new FormControl(), 
    CourseId:new FormControl(), 
  })


  constructor(public TService:TrainerService ,public dialog: MatDialog){}


  @ViewChild('deleteDailog') callDeleteDailog!:TemplateRef<any>; 
  @ViewChild('updateDailog') callupdateDailog!:TemplateRef<any>; 
  pData :any ; 
  openUpdateDailog(courseSession:any){
    console.log(courseSession);
    this.dialog.open(this.callupdateDailog)
    this.pData=courseSession;
    console.log(this.pData);
    this.updateForm.controls['courseSessionid'].setValue(this.pData.courseSession.id);
  }

  update(){
    this.TService.updateCourseSession(this.updateForm.value);
  }

  
  openDeleteDailog(id:number){
 const dailogResult=   this.dialog.open(this.callDeleteDailog);
 dailogResult.afterClosed().subscribe((result)=>{
  if(result !=undefined){
    if(result==='yes') 
      this.TService.DeleteCourseSession(id); 
    
    else 
    console.log('Thank you !');
  }
 })
  }
  openCreateDailog(){
    this.dialog.open(CreateCourseSessionComponent)
  }



  
}
