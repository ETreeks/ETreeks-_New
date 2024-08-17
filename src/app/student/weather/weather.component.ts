
// import { Component } from '@angular/core';
// import { WeatherService } from 'src/app/Services/weather.service';
// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.css']
// })
// export class WeatherComponent {
//   //weatherResult: WeatherResult | undefined;
//   // weatherResult: WeatherResult | null = null;
//   weatherData:any
//   cityName: string = '';

//   constructor(private weatherService: WeatherService) { }

//   getWeather() {
//     if (this.cityName) {
//       debugger
//       this.weatherService.getWeatherByCityName(this.cityName).subscribe(
//         (result) => this.weatherData = result,
//         (error) => console.error('Error fetching weather data', error)
//       );
//     }
//   }
// }
/*
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
@Component({
 selector: 'app-weather',
 templateUrl: './weather.component.html',
 styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
 weatherData: any;
 constructor(private weatherService: WeatherService) { }
 ngOnInit() {
   this.getCurrentLocationWeather();
 }
 getCurrentLocationWeather() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
       const lat = position.coords.latitude;
       const lon = position.coords.longitude;
       this.weatherService.getWeatherByCoordinates(lat, lon).subscribe(
         (result) => this.weatherData = result,
         (error) => console.error('Error fetching weather data', error)
       );
     });
   } else {
     console.error('Geolocation is not supported by this browser.');
   }
 }
}
*/

import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
@Component({
 selector: 'app-weather',
 templateUrl: './weather.component.html',
 styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
 weatherData: any;
 constructor(private weatherService: WeatherService) { }
 ngOnInit() {
   this.getCurrentLocationWeather();
 }
 getCurrentLocationWeather() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
       const lat = position.coords.latitude;
       const lon = position.coords.longitude;
       this.weatherService.getWeatherByCoordinates(lat, lon).subscribe(
         (result) => this.weatherData = this.convertToCelsius(result),
         (error) => console.error('Error fetching weather data', error)
       );
     });
   } else {
     console.error('Geolocation is not supported by this browser.');
   }
 }
 convertToCelsius(data: any) {
   return {
     ...data,
     main: {
       ...data.main,
       temp: (data.main.temp - 273.15).toFixed(2)  // تحويل الكلفن إلى درجة مئوية
     }
   };
 }
}