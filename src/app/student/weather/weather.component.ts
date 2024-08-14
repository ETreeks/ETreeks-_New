
import { Component } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  //weatherResult: WeatherResult | undefined;
  // weatherResult: WeatherResult | null = null;
  weatherData:any
  cityName: string = '';

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    if (this.cityName) {
      debugger
      this.weatherService.getWeatherByCityName(this.cityName).subscribe(
        (result) => this.weatherData = result,
        (error) => console.error('Error fetching weather data', error)
      );
    }
  }
}
