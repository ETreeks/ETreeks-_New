import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { AdminService } from 'src/app/Services/admin.service';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  constructor(public m:MainService){}
  createCatForm:FormGroup = new FormGroup({ 
    categoryname:new FormControl('',[Validators.required]),
    imagename:new FormControl('',[Validators.required]),

  
  }
)


uploadImage(file:any)
{
   if(file.length ==0)  return;

  let fileToUpload = <File> file[0];
  const formData = new FormData ();
  formData.append('file',fileToUpload,fileToUpload.name);
  this.m.uploadAttachmenetCat(formData);

}

}
