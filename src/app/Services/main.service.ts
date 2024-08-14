import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient ,private toster: ToastrService) { }
  courses:any=[];
  categories:any =[];
  displayImage:any;
 


//hits api
getAllCourses() :any 
{
this.http.get('https://localhost:7281/api/Course').subscribe(res=>
{
this.courses=res; 
this.toster.success('retrieve All Courses successfully');
},
err=>{
console.log("error");
console.log(err.status);
console.log(err.manage);
this.toster.error('something wrong');
})
}




getAllCourses2(): Observable<any[]> {
  return this.http.get<any[]>('https://localhost:7281/api/Course');
}
getcoursesT(){
debugger
  const trainerId = Number(localStorage.getItem('Id'));
  this.getAllCourses2().subscribe((courses: any[]) => {
    this.courses = courses.filter(course => course.trainer_Id === trainerId);
    console.log(this.courses);
  
  });
}


DeleteCourse(id:number)
{
  debugger
this.http.delete('https://localhost:7281/api/Course/'+id).subscribe((res:any)=>{
console.log('Deleted');
this.toster.success('Course deleted  successfully');
window.location.reload();

},err=>{
console.log('Error');
this.toster.error('something wrong');
})
}

//mangecategory.ts
GetAllCategories()
{
this.http.get<any[]>('https://localhost:7281/api/Category/GetAllCategories').subscribe(res=>
{
this.categories=res; 
console.log(this.categories);
this.toster.success('retrieve All Categories successfully');
},
err=>{
console.log("error");
console.log(err.status);
console.log(err.manage);
this.toster.error('something wrong');
})
}
//
getAllCategories(): Observable<any[]> {
  return this.http.get<any[]>('https://localhost:7281/api/category/GetAllCategories');
  
}

getCourseDetails(id:number): Observable<any[]> {
  return this.http.get<any[]>('https://localhost:7281/api/Course/'+id);
  
}

DeleteCategory(id:number)
{
  debugger
this.http.delete('https://localhost:7281/api/Category/DeleteCategory/'+id).subscribe((res:any)=>{
console.log('Deleted');
this.toster.success('Category deleted  successfully');
window.location.reload();

},err=>{
console.log('Error');
this.toster.error('something wrong');
})
window.location.reload();
}




CreateCategory(body: any) {
  debugger
  body.imagename=this.displayImage;
  this.http.post('https://localhost:7281/api/Category/CreateCategory', body).subscribe(
    (resp) => {
      console.log("Category Created Successfully");
      window.location.reload();
    },
    err => {
      console.log("An error occurred in the create category process", err);
    }
  );
  //window.location.reload();
}

// CreateCourse(body: any) {
//   debugger
  
//   body.imagename=this.displayImage;
//   this.http.post('https://localhost:7281/api/Course', body).subscribe(
//     (resp) => {
//       console.log("Course Created Successfully");
//     },
//     err => {
//       console.log("An error occurred in the create course process", err);
//     }
//   );
//   window.location.reload();
// }
CreateCourse(body: any) {
  debugger
  const trainerId = Number(localStorage.getItem('Id'));
  body.trainer_Id = trainerId; 
  body.imagename = this.displayImage;

  this.http.post('https://localhost:7281/api/Course', body).subscribe(
    (resp) => {
      this.toster.success('Course Created Successfully');
      console.log("Course Created Successfully");
      window.location.reload(); 
    },
    err => {
      this.toster.error('An error occurred in the Create Course process');
      console.log("An error occurred in the create course process", err);
    }
  );
}




uploadAttachmenet(images:FormData) :any 
{
  debugger
this.http.post('https://localhost:7281/api/Course/UploadImage',images).subscribe((reap:any)=>{
this.displayImage = reap.imagename;
console.log(this.displayImage);
},err=>{
console.log("error");
})
}

UpdateCourse(body: any)
{
  debugger
  const trainerId = Number(localStorage.getItem('Id'));
  body.trainer_Id = trainerId; 
  body.imagename=this.displayImage || body.imagename;
    this.http.put('https://localhost:7281/api/Course', body).subscribe(
      (resp) => {
        this.toster.info('Course Updated Successfully');
        console.log("Course Updated Successfully");
        window.location.reload();
      
      },
      err => {
        this.toster.error('An error occurred in the update Course process');
        console.log("An error occurred in the update Course process", err);
      
      }
    );
    window.location.reload();
}


UpdateCategory(body: any)
{
  debugger
  body.imagename=this.displayImage || body.imagename;
    this.http.put('https://localhost:7281/api/Category/UpdateCategory', body).subscribe(
      (resp) => {
        console.log("Category Updated Successfully");
      },
      err => {
        console.log("An error occurred in the update Category process", err);
      }
    );
    window.location.reload();
}

uploadAttachmenetCat(images:FormData) :any 
{
  debugger
this.http.post('https://localhost:7281/api/Category/UploadCatImage',images).subscribe((reap:any)=>{
this.displayImage = reap.imagename ;
console.log(this.displayImage);
},err=>{
console.log("error");
})
}





coursesTC:any=[];
getAllCoursesTC( trainerId : Number): any {
  
debugger
  this.http.get<any[]>('https://localhost:7281/api/Course').subscribe(res => {
    this.coursesTC = res.filter(course => course.trainer_Id == trainerId);
    this.toster.success('Retrieve All Courses successfully');
  },
  err => {
    console.log("error");
    console.log(err.status);
    console.log(err.message);
    this.toster.error('Something went wrong');
  });
}
}
