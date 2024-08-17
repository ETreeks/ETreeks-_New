// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {

//   private apiKey = ``;
//   constructor(private http: HttpClient) { }

//   // getWeatherByCityName(cityName: string) {
//   //   return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`);
//   // }

//   getWeatherByCoordinates(lat: number, lon: number) {
//     return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
//    }
  
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class WeatherService {
 private apiKey = ``;  
 constructor(private http: HttpClient) { }
 getWeatherByCoordinates(lat: number, lon: number) {
   return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
 }
}

