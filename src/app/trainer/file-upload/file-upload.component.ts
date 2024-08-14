// src/app/trainer/file-upload/file-upload.component.ts
import { Component } from '@angular/core';
import { FileUploadService } from 'src/app/Services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  constructor(private fileUploadService: FileUploadService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.fileUploadService.upload(this.selectedFile).subscribe(response => {
        console.log('File uploaded successfully', response);
        // Handle response
      }, error => {
        console.error('Error uploading file', error);
        // Handle error
      });
    }
  }
}
