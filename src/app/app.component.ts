import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
   city: string = '';
  weatherData: any;
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.error = '';
      },
      error: (err) => {
        this.weatherData = null;
        this.error = 'City not found or API error';
      },
    });
  }
}
