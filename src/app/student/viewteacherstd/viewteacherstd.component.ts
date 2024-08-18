import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { AddresssDto } from 'src/Interface/AddresssDto';  
import { Map, tileLayer, marker, Marker } from 'leaflet';
import { ToastrService } from 'ngx-toastr';
import { AddressStudentDto } from 'src/Interface/AddressStudentDto';
import { HomeService } from 'src/app/Services/home.service';
import { MapDialogComponent } from '../map-dialog/map-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-viewteacherstd',
  templateUrl: './viewteacherstd.component.html',
  styleUrls: ['./viewteacherstd.component.css']
})
export class ViewteacherstdComponent implements OnInit {
  map!: Map;
  currentMarker?: Marker;
  selectedAddress: AddressStudentDto | null = null;  

  constructor(public home :HomeService,public a: AdminService, private router: Router, private toastr: ToastrService ,private dialog: MatDialog) { }

  ngOnInit(): void {
    //this.a.DisplayAllTrainers();
    this.home.DisplayAllAcceptedTrainers();
    this.initMap();
  }

  showcourses() {
    this.router.navigate(['viewtcourses']);
  }

  // Initialize the map
  private initMap(): void {
    this.map = new Map('map').setView([51.505, -0.09], 13);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  viewLocation(trainerId: number): void {
    this.a.getTrainerAddress(trainerId).subscribe(
      (address: AddressStudentDto) => {
        const dialogRef = this.dialog.open(MapDialogComponent, {
          width: '600px',
          height: '600px'
        });
  
        // Set the marker once the dialog is opened and the map is ready
        dialogRef.afterOpened().subscribe(() => {
          dialogRef.componentInstance.setMarker(address);
        });
      },
      error => {
        console.error('Error fetching address', error);
        this.toastr.error('Failed to load the trainer\'s location');
      }
    );
  }
}
