import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  constructor(public m:MainService , public A :AdminService){}
  
  
  categories: any[] = [];
  trainers: any[] = [];

  createcourseForm:FormGroup = new FormGroup({ 
    name:new FormControl('',[Validators.required]),
    imagename:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    passmark:new FormControl('',[Validators.required]),
    category_Id:new FormControl('',[Validators.required]),
    trainer_Id:new FormControl('',[Validators.required]),
   
}  
)
ngOnInit(): void {
  this.m.getAllCategories().subscribe((data: any[]) => {
    this.categories = data.map(category => ({
      id10: category.id,
      name10: category.categoryname
    }));
    console.log(this.categories); 
  }, err => {
    console.log("Error fetching categories", err);
  });


  this.A.displayAllTrainers().subscribe((data: any[]) => {
    this.trainers = data.map(tra => ({
      id10: tra.id,
      name10: tra.username
    }));
    console.log(this.trainers); 
  }, err => {
    console.log("Error fetching trainers", err);
  });

}

uploadImage(file:any)
{
  if(file.length ==0) return;

  let fileToUpload = <File> file[0];
  const formData = new FormData ();
  formData.append('file',fileToUpload,fileToUpload.name);
  this.m.uploadAttachmenet(formData);

}
}
