import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { AddresssDto } from 'src/Interface/AddresssDto';  
import { Map, tileLayer, marker, Marker } from 'leaflet';
import { ToastrService } from 'ngx-toastr';
import { AddressStudentDto } from 'src/Interface/AddressStudentDto';

@Component({
  selector: 'app-viewteacherstd',
  templateUrl: './viewteacherstd.component.html',
  styleUrls: ['./viewteacherstd.component.css']
})
export class ViewteacherstdComponent implements OnInit {
  map!: Map;
  currentMarker?: Marker;
  selectedAddress: AddressStudentDto | null = null;  

  constructor(public a: AdminService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.a.DisplayAllTrainers();
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

  // Method to view the location of a trainer
  viewLocation(trainerId: number): void {
    this.a.getTrainerAddress(trainerId).subscribe(
      (address: AddressStudentDto) => {
        this.selectedAddress = address;
  
        // Remove the old marker if it exists
        if (this.currentMarker) {
          this.map.removeLayer(this.currentMarker);
        }
  
        // Add the new marker to the map with formatted popup content
        this.currentMarker = marker([address.latitude, address.longitude]).addTo(this.map)
          .bindPopup(`
            <b>Location Details:</b><br>
            Latitude: ${address.latitude}<br>
            Longitude: ${address.longitude}<br>
            City: ${address.city}<br>
            Country: ${address.country}
          `)
          .openPopup();
  
        // Center the map on the selected location
        this.map.setView([address.latitude, address.longitude], 13);
      },
      error => {
        console.error('Error fetching address', error);
        this.toastr.error('Failed to load the trainer\'s location');
      }
    );
  }
}
