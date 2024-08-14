import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorysearch'
})
export class CategorysearchPipe implements PipeTransform {

  transform(value: any [], filterText:string)  {
    //   if(value.length==0 || filterText=='')
    //   {
    //     return  value;
    //   }
    //   else return value.filter((category)=>{
    //     return category.categoryname.toLowerCase()== filterText.toLowerCase();
    //   })
    // }
    if (!value || !filterText) {
      return value;
    }
    return value.filter(category =>
      category.categoryname.toLowerCase().includes(filterText.toLowerCase())
    );
  }

}
