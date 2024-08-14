import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/Services/main.service';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-managecourses',
  templateUrl: './managecourses.component.html',
  styleUrls: ['./managecourses.component.css']
})
export class ManagecoursesComponent implements OnInit {
  constructor(public mc: MainService, public dialog: MatDialog , public A:AdminService) { }
  @ViewChild('deleteDailog') callDeleteDailog!: TemplateRef<any>;

  
  pData :any ;
  categories: any[] = [];
  trainers: any[] = [];
  _filetrText: string ='';
  currentImageName: string = ''; 
  updateForm:FormGroup =new FormGroup
  ({
    id : new FormControl('',),
    name: new FormControl('', [Validators.required]),
    imagename: new FormControl(''),
    // categoryid: new FormControl(''),
    price : new FormControl(''),
    category_Id: new FormControl(''),
    trainer_Id : new FormControl(''),
    passmark : new FormControl(''),
  })
  @ViewChild('updateDialog') callUpdateDailog!:TemplateRef<any>;
  // openUpdateDailog(course :any)
  // {
  //   console.log(course);
  //   this.dialog.open(this.callUpdateDailog);
  //   this.pData=course;
  //   console.log(this.pData);
  //   this.updateForm.controls['id'].setValue(this.pData.id);
  // }
  openUpdateDailog(course: any) {
    this.pData = course;
    this.currentImageName = course.imagename;
    this.updateForm.controls['id'].setValue(this.pData.id);
    this.updateForm.controls['name'].setValue(this.pData.name);
    this.updateForm.controls['price'].setValue(this.pData.price);
    this.updateForm.controls['category_Id'].setValue(this.pData.category_Id);
    this.updateForm.controls['trainer_Id'].setValue(this.pData.trainer_Id);
    this.updateForm.controls['passmark'].setValue(this.pData.passmark);
    this.updateForm.controls['imagename'].setValue(this.currentImageName);
    this.dialog.open(this.callUpdateDailog);
  } 

  openCreateCourseDailog() {
    this.dialog.open(CreateCourseComponent);
  }

  ngOnInit(): void {
    this.mc.getAllCourses();

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

    //  Update()
    //  {
    //    this.mc.UpdateCourse(this.updateForm.value);
    //  }
     Update() {
      const updateData = { ...this.updateForm.value };
      if (!updateData.imagename) {
        updateData.imagename = this.currentImageName;
      }
  
      this.mc.UpdateCourse(updateData);
    }
    //  uploadImage(file:any)
    //  {
    //     if(file.length ==0)   return  ;
   
    //    let fileToUpload = <File> file[0];
    //    const formData = new FormData ();
    //    formData.append('file',fileToUpload,fileToUpload.name);
    //    this.mc.uploadAttachmenet(formData);
   
    //  }
    uploadImage(file:any)
    {
      if(file.length ==0) return  ;
  
      let fileToUpload = <File> file[0];
      const formData = new FormData ();
      formData.append('file',fileToUpload,fileToUpload.name);
   
     this.mc.uploadAttachmenetCat(formData).subscribe((response: any) => {
      this.currentImageName = response.imagename;
      this.updateForm.controls['imagename'].setValue(this.currentImageName);
       
  
    });
  }
     
  AcceptCourse(id :number)
    {
    this.A.AcceptCourse(id);
    }
}

