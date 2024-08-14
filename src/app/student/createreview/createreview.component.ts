import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-createreview',
  templateUrl: './createreview.component.html',
  styleUrls: ['./createreview.component.css']
})
export class CreatereviewComponent {
  reviewMessage: string = '';

  //@Inject(MAT_DIALOG_DATA) public data : any
  constructor(public studentService: StudentService , @Inject(MAT_DIALOG_DATA) public data: { id: number }){}
  createReviewForm:FormGroup = new FormGroup({ 
    message:new FormControl('',[Validators.required]),
    guser_Id:new FormControl(''),
    course_Id:new FormControl(this.data.id),
  })


createReview(): void {

    if (this.createReviewForm.valid) {
   
      this.studentService.createReview(this.createReviewForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}