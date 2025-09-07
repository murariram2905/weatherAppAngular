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
  weatherData: any;               // For searched city
  pidugurallaWeather: any;        // For default right-side weather
  error: string = '';
  currentDate: Date = new Date();

  constructor(private weatherService: WeatherService) {
    this.getPidugurallaWeather();

    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  getWeatherInfo(): void {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
                console.log('data',data);

        this.weatherData = data;
        this.error = '';
      },
      error: () => {
        this.weatherData = null;
        this.error = 'City not found or API error';
      },
    });
  }

  getPidugurallaWeather(): void {
    this.weatherService.getWeather('Piduguralla').subscribe({
      next: (data) => {
        this.pidugurallaWeather = data;
      },
      error: () => {
        this.pidugurallaWeather = null;
      },
    });
  }
}
