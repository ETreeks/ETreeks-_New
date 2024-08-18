import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Map, tileLayer, marker, Marker } from 'leaflet';
import { AddressStudentDto } from 'src/Interface/AddressStudentDto';

@Component({
  selector: 'app-map-dialog',
  template: '<div id="dialogMap" style="height: 500px; width: 100%;"></div>',
})
export class MapDialogComponent implements OnInit {
  map!: Map;
  currentMarker?: Marker;

  constructor(public dialogRef: MatDialogRef<MapDialogComponent>) {}

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = new Map('dialogMap').setView([51.505, -0.09], 13);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  setMarker(address: AddressStudentDto): void {
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
  }
}
