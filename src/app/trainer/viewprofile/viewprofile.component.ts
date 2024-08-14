import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/Services/trainer.service';
import { ProfileTrainerDTO } from 'src/app/dtos/profile-trainer.dto';
import { AuthService } from 'src/app/Services/auth.service'; // Import AuthService

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  profile: ProfileTrainerDTO | undefined;

  constructor(
    private trainerService: TrainerService,
    private authService: AuthService // Inject AuthService
  ) { }

  ngOnInit(): void {
    const trainerId = this.authService.getTrainerIdFromToken(); // Get trainer ID from token
    if (trainerId !== null) {
      this.trainerService.viewProfile(trainerId).subscribe(
        profile => {
          console.log('Profile fetched:', profile); // Add this line to debug
          this.profile = profile;
        },
        error => console.error('Error fetching profile', error)
      );
    } else {
      console.error('Trainer ID could not be retrieved from token.');
    }
  }

  onSubmit(): void {
    if (this.profile) {
      this.trainerService.updateProfile(this.profile).subscribe(
        () => alert('Profile updated successfully'),
        error => console.error('Error updating profile', error)
      );
    }
    window.location.reload();
  }

  updateProfile() {
    if (this.profile) {
      this.trainerService.updateUser(this.profile);
    } else {
      console.error('Profile is undefined');
    }
  }

  uploadImage(file: any) {
    if (file.length === 0) return;
    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.trainerService.uploadFile(formData);
  }
}
