import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent  implements OnInit {
  constructor(public m:MainService , public A :AdminService){}
  
  
  categories: any[] = [];
  trainers: any[] = [];
  

  createcourseForm:FormGroup = new FormGroup({ 
    name:new FormControl('',[Validators.required]),
    imagename:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    passmark:new FormControl('',[Validators.required]),
    category_Id:new FormControl('',[Validators.required]),
    trainer_Id:new FormControl(''),
   
}  
)
ngOnInit(): void {
  this.m.getAllCategories().subscribe((data: any[]) => {
    this.categories = data.map(category => ({
      id: category.id,
      name: category.categoryname
    }));
    console.log(this.categories); 
  }, err => {
    console.log("Error fetching categories", err);
  });



}

uploadImage(file:any)
{
   if(file.length ==0) return ;

  let fileToUpload = <File> file[0];
  const formData = new FormData ();
  formData.append('file',fileToUpload,fileToUpload.name);
  this.m.uploadAttachmenet(formData);

}
}
