import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.css']
})
export class EditaboutComponent implements OnInit {


  id: string = '2';
  title1: string = '';
  title2: string = '';
  title3: string = '';
  title4: string = '';
  description: string = '';
  imagename1:string = '';
  imagename2:string = '';
  imagename3:string = '';
  imagename4:string = '';



  ngOnInit(): void {
    this.loadAboutData();
  }

  constructor(public editAbout: AdminService ,private toster : ToastrService) {}

  loadAboutData() {
    this.editAbout.GetAbout().subscribe(
      (data: any) => {
        this.id = data.id;
        this.title1 = data.title1;
        this.title2 = data.title2;
        this.title3 = data.title3;
        this.title4 = data.title4;
        this.description = data.description;
        this.toster.success('About data retrieved successfully');
      },
      err => {
        console.log("Error occurred while fetching home data", err);
        this.toster.error('Error occurred while fetching about data');
      }
    );
  }

  updateAbout() {
    const updatedAbout = {
      id: this.id,
      title1: this.title1,
      title2: this.title2,
      title3: this.title3,
      title4: this.title4,
      description: this.description,
    };

    this.editAbout.UpdateAbout(updatedAbout);
    this.toster.info('about data updated successfully');
  }

}
