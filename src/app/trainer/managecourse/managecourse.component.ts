import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { MainService } from 'src/app/Services/main.service';
import { CreatecourseComponent } from '../createcourse/createcourse.component';

@Component({
  selector: 'app-managecourse',
  templateUrl: './managecourse.component.html',
  styleUrls: ['./managecourse.component.css']
})
export class ManagecourseComponent implements OnInit {
  constructor(public mc: MainService, public dialog: MatDialog , public A:AdminService) { }
  @ViewChild('deleteDailog') callDeleteDailog!: TemplateRef<any>;

  
  pData :any ;
  categories: any[] = [];
  trainers: any[] = [];
  courses: any[] = [];
  _filetrText: string ='';
  currentImageName: string = ''; 
  updateForm:FormGroup =new FormGroup
  ({
    id : new FormControl('',),
    name: new FormControl('', [Validators.required]),
    imagename: new FormControl(''),
    price : new FormControl(''),
    category_Id: new FormControl(''),
    trainer_Id : new FormControl(''),
    passmark : new FormControl(''),
  })
  @ViewChild('updateDialog') callUpdateDailog!:TemplateRef<any>;
  openUpdateDailog(course :any)
  {
    console.log(course);
    this.dialog.open(this.callUpdateDailog);
    this.pData=course;
    console.log(this.pData);
      
      this.currentImageName = course.imagename;
    this.updateForm.controls['id'].setValue(this.pData.id);
  } 

  openCreateCourseDailog() {
    this.dialog.open(CreatecourseComponent);
  }

  ngOnInit(): void {

    this.mc.getcoursesT();
    this.mc.getAllCategories().subscribe((data: any[]) => {
      this.categories = data.map(category => ({
        id: category.id,
        name: category.categoryname
      }));
      console.log(this.categories); 
    }, err => {
      console.log("Error fetching categories", err);
    });
  
  
    this.A.displayAllTrainers().subscribe((data: any[]) => {
      this.trainers = data.map(tra => ({
        id: tra.id,
        name: tra.username
      }));
      console.log(this.trainers);
    }, err => {
      console.log("Error fetching trainers", err);
    });

  }

  openDeleteDailog(id:number){
    const dailogResult=this.dialog.open(this.callDeleteDailog);
    dailogResult.afterClosed().subscribe((result)=>{
     if(result !=undefined){
       if(result=='yes') 
         this.mc.DeleteCourse(id); 
       else 
       console.log('Thank you !');
     }
    })
     }

     Update()
     {
      //  this.mc.UpdateCourse(this.updateForm.value);
      const updateData = { ...this.updateForm.value };
      if (!updateData.imagename) {
        updateData.imagename = this.currentImageName;
      }
  
      this.mc.UpdateCourse(updateData);
     }
     uploadImage(file:any)
     {
        if(file.length ==0) return  ;
   
       let fileToUpload = <File> file[0];
       const formData = new FormData ();
       formData.append('file',fileToUpload,fileToUpload.name);
       this.mc.uploadAttachmenet(formData);
   
     }
     

}

