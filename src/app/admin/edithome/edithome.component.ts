// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AdminService } from 'src/app/Services/admin.service';

// @Component({
//   selector: 'app-edithome',
//   templateUrl: './edithome.component.html',
//   styleUrls: ['./edithome.component.css']
// })
// export class EdithomeComponent  implements OnInit{
//   constructor(public editHome : AdminService){}
//   ngOnInit(): void {
//     this.editHome.gethome();
//   }

//   homeUpdatedForm:FormGroup = new FormGroup({ 
//     id:new FormControl('21'),
//     location:new FormControl(''),
//     description :new FormControl(''),
//     imagename: new FormControl(''),
//     phone: new FormControl(''),
//     email: new FormControl(''),
//     title1: new FormControl(''),
  
//   }
// )


// }
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-edithome',
  templateUrl: './edithome.component.html',
  styleUrls: ['./edithome.component.css']
})
export class EdithomeComponent implements OnInit {
  id: string = '21';
  location: string = '';
  description: string = '';
  imagename: string = '';
  phone: string = '';
  email: string = '';
  title1: string = '';

  constructor(public editHome: AdminService ,private toster : ToastrService)  {}

  ngOnInit(): void {
    this.loadHomeData();
  }

  loadHomeData() {
    this.editHome.GetHome().subscribe(
      (data: any) => {
        this.id = data.id;
        this.location = data.location;
        this.description = data.description;
        this.imagename = data.imagename;
        this.phone = data.phone;
        this.email = data.email;
        this.title1 = data.title1;
        this.toster.success('Home data retrieved successfully');
      },
      err => {
        console.log("Error occurred while fetching home data", err);
        this.toster.error('Error occurred while fetching home data');
      }
    );
  }

  updateHome() {
    const updatedHome = {
      id: this.id,
      location: this.location,
      description: this.description,
      imagename: this.imagename,
      phone: this.phone,
      email: this.email,
      title1: this.title1,
    };

    this.editHome.UpdateHome(updatedHome);
    this.toster.info('Home data updated successfully');
  }
}
