// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-homestudent',
//   templateUrl: './homestudent.component.html',
//   styleUrls: ['./homestudent.component.css']
// })
// export class HomestudentComponent {
//   username = String(localStorage.getItem('username')); 
// }


// import { Component, OnInit } from '@angular/core';
// import { WeatherService } from 'src/app/Services/weather.service';
// @Component({
//  selector: 'app-homestudent',
//  templateUrl: './homestudent.component.html',
//  styleUrls: ['./homestudent.component.css']
// })
// export class HomestudentComponent implements OnInit {
//  username = String(localStorage.getItem('username'));
//  constructor(private weatherService: WeatherService) {}
//  ngOnInit() {
//    this.getCurrentLocationWeather();
//  }
//  getCurrentLocationWeather() {
//    if (navigator.geolocation) {
//      navigator.geolocation.getCurrentPosition(position => {
//        const lat = position.coords.latitude;
//        const lon = position.coords.longitude;
//        this.weatherService.getWeatherByCoordinates(lat, lon).subscribe(
//          (result) => console.log(result), // هنا يمكنك حفظ النتيجة في متغير لعرضها
//          (error) => console.error('Error fetching weather data', error)
//        );
//      });
//    } else {
//      console.error('Geolocation is not supported by this browser.');
//    }
//  }
// }

import { Component } from '@angular/core';
@Component({
 selector: 'app-homestudent',
 templateUrl: './homestudent.component.html',
 styleUrls: ['./homestudent.component.css']
})
export class HomestudentComponent {
 username = String(localStorage.getItem('username'));
}
