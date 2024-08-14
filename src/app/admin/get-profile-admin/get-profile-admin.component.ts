import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';
import { GuserDto } from 'src/Interface/guser.dto';
import { UpdateProfileAdminDto } from 'src/Interface/update-profile-admin.dto';

@Component({
  selector: 'app-get-profile-admin',
  templateUrl: './get-profile-admin.component.html',
  styleUrls: ['./get-profile-admin.component.css']
})
export class GetProfileAdminComponent implements OnInit {
  profile: GuserDto | null = null;
  userId: number | null = null;
  displayImage: string | null = null;

  constructor(private adminService: AdminService ,private toastr: ToastrService) { }

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
      this.adminService.getProfileAdmin(this.userId).subscribe(
        (data: GuserDto) => {
          this.profile = data;
          if (this.profile && this.profile.imageName) {
            this.displayImage = `/assets/Images/${this.profile.imageName}`;
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

  updateProfile(): void {
    if (this.profile && this.userId !== null) {
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      if (fileInput && fileInput.files && fileInput.files[0]) {
        const file: File = fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);
  
        this.adminService.uploadProfileImage(formData).subscribe(
          (response: GuserDto) => {
            this.saveProfile(response.imageName);
          },
          (error) => {
            console.error('Error uploading image', error);
            this.toastr.error('Error uploading image. Please try again.');
          }
        );
      } else {
        this.saveProfile(this.profile.imageName);
      }
    }
  }
  
  private saveProfile(imageName: string): void {
    const updatedProfile: UpdateProfileAdminDto = {
      userId: this.userId!,
      newUsername: this.profile!.username,
      newPassword: this.profile!.password,
      newFname: this.profile!.fname,
      newLname: this.profile!.lname,
      newEmail: this.profile!.email,
      newImageName: imageName, 
      newGender: this.profile!.gender,
      newPhone: this.profile!.phone
    };
  
    this.adminService.updateProfileAdmin(updatedProfile).subscribe(
      response => {
        console.log('Profile updated successfully');
        this.toastr.success('Your profile updated successfully');
      },
      error => {
        console.error('Error updating profile', error);
        this.toastr.error('Error updating profile. Please try again.');
      }
    );
  }
  


  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.adminService.uploadProfileImage(formData).subscribe(
        (response: GuserDto) => {
          this.displayImage = `/assets/Images/${response.imageName}`;
        },
        (error) => {
          console.error('Error uploading image', error);
        }
      );
    }
  }
  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }
}
