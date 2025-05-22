import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
// export class AppComponent {
//    city: string = '';
//   weatherData: any;
//   error: string = '';

//   constructor(private weatherService: WeatherService) {}

//   getWeather(): void {
//     this.weatherService.getWeather(this.city).subscribe({
//       next: (data) => {
//         this.weatherData = data;
//         this.error = '';
//       },
//       error: (err) => {
//         this.weatherData = null;
//         this.error = 'City not found or API error';
//       },
//     });
//   }
// }

export class AppComponent {
  city: string = '';
  weatherData: any;               // For searched city
  pidugurallaWeather: any;        // For default right-side weather
  error: string = '';
  currentDate: Date = new Date();

  constructor(private weatherService: WeatherService) {
    this.getPidugurallaWeather();

    // Update time every second
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
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
