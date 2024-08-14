import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/Services/student.service';
import { ProfileStudentDTO } from 'src/Interface/profile-student-dto';

@Component({
  selector: 'app-viewprofilestd',
  templateUrl: './viewprofilestd.component.html',
  styleUrls: ['./viewprofilestd.component.css']
})
export class ViewprofilestdComponent implements OnInit {
  profile: ProfileStudentDTO | null = null;
  userId: number | null = null;
  displayImage: string | null = null;

  constructor(private studentService: StudentService ,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadUserIdFromLocalStorage();
    this.loadProfile();
  }

  loadUserIdFromLocalStorage(): void {
    const userIdFromStorage = localStorage.getItem('Id');
    if (userIdFromStorage) {
      this.userId = Number(userIdFromStorage);
    } else {
      console.warn('userId not found in local storage');
    }
  }

  loadProfile(): void {
    if (this.userId !== null) {
      this.studentService.viewProfile(this.userId).subscribe(
        (data: ProfileStudentDTO) => {
          this.profile = data;
          if (this.profile && this.profile.imagename) {
            this.displayImage = `/assets/Images/${this.profile.imagename}`;
          } else {
            this.displayImage = 'http://bootdey.com/img/Content/avatar/avatar1.png'; // Default image
          }
        },
        error => {
          console.error('Error loading data', error);
        }
      );
    } else {
      console.error('userId is not available');
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && this.profile) {
      const formData = new FormData();
      formData.append('file', file);

      this.studentService.uploadProfileImage(formData).subscribe(
        (response: ProfileStudentDTO) => {
          this.profile!.imagename = response.imagename;
          this.displayImage = `/assets/Images/${response.imagename}`;
        },
        error => {
          console.error('Error uploading image', error);
          this.toastr.error('Error uploading image. Please try again.');
        }
      );
    }
  }

  updateProfile(): void {
    if (this.profile && this.userId !== null) {
      this.profile.id = this.userId;
      this.studentService.updateProfile(this.profile).subscribe(
        response => {
          console.log('Profile updated successfully');
          this.toastr.success('Your profile updated successfully');
        },
        error => {
          console.error('Error updating profile', error);
          this.toastr.error('Error updating your profile');
        }
      );
    }
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

}
