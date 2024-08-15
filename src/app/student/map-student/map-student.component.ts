import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, latLng, marker, Marker } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { AddresssDto } from 'src/Interface/AddresssDto';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-map-student',
  templateUrl: './map-student.component.html',
  styleUrls: ['./map-student.component.css']
})
export class MapStudentComponent implements OnInit {


  map!: Map;
  selectedLocation: { lat: number; lng: number; city?: string; country?: string } = { lat: 0, lng: 0 };
  private currentMarker?: Marker; 

  constructor(private SService: StudentService, private http: HttpClient ,private toastr: ToastrService,) {}

  ngOnInit(): void {
    this.initMap();
    this.getCurrentLocation();
  }

  private initMap(): void {
    this.map = new Map('map').setView([51.505, -0.09], 13);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', (e: any) => this.onMapClick(e));
  }

  private getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.selectedLocation = { lat: latitude, lng: longitude };

          // Display the user's current location on the map
          this.map.setView([latitude, longitude], 13);
          this.addMarker(latitude, longitude, 'Your current location');

          // Optionally, fetch and display address details
          this.getAddressFromLatLng(latitude, longitude).then(address => {
            this.selectedLocation = {
              ...this.selectedLocation,
              city: address.city,
              country: address.country
            };
          });
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  private onMapClick(e: any): void {
    this.selectedLocation = { lat: e.latlng.lat, lng: e.latlng.lng };

    this.getAddressFromLatLng(this.selectedLocation.lat, this.selectedLocation.lng).then(address => {
      this.selectedLocation = {
        ...this.selectedLocation,
        city: address.city,
        country: address.country
      };
    });

    // Remove the old marker if it exists
    if (this.currentMarker) {
      this.map.removeLayer(this.currentMarker);
    }

    // Add the new marker
    this.addMarker(this.selectedLocation.lat, this.selectedLocation.lng, `Location: ${this.selectedLocation.lat.toFixed(4)}, ${this.selectedLocation.lng.toFixed(4)}<br>City: ${this.selectedLocation.city}<br>Country: ${this.selectedLocation.country}`);
  }

  private addMarker(lat: number, lng: number, popupText: string): void {
    this.currentMarker = marker([lat, lng]).addTo(this.map)
      .bindPopup(popupText)
      .openPopup();
  }

  private async getAddressFromLatLng(lat: number, lng: number): Promise<{ city?: string; country?: string }> {
    try {
      const response = await this.http.get<any>(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`).toPromise();
      return {
        city: response.address?.city || response.address?.town || response.address?.village,
        country: response.address?.country
      };
    } catch (error) {
      console.error('Error retrieving address', error);
      return {};
    }
  }

  saveLocation(): void {
    const address: AddresssDto = {
      latitude: this.selectedLocation.lat,
      longitude: this.selectedLocation.lng,
      city: this.selectedLocation.city!,
      country: this.selectedLocation.country!,
      id: 0,
      userId: parseInt(localStorage.getItem('Id') || '0', 10) 
    };

    this.SService.createAddress(address).subscribe(
      response => {
        console.log('Location saved successfully', response);
        this.toastr.success('Location saved successfully');

      },
      error => {
        console.error('Error saving location', error);
        this.toastr.error('Error saving location');

      }
    );
  }

}
