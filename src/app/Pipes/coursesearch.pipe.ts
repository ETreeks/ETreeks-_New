import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coursesearch'
})
export class CoursesearchPipe implements PipeTransform {

  transform(value: any [], filterText:string)  {
    //   if(value.length==0 || filterText=='')
    //   {
    //     return  value;
    //   }
    //   else return value.filter((course)=>{
    //     return course.name.toLowerCase()== filterText.toLowerCase();
    //   })
    // }
    if (!value || !filterText) {
      return value;
    }
    return value.filter(course =>
      course.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
