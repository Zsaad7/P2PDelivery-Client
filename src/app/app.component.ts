import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

//interface WeatherForecast {
//  date: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'
})
export class AppComponent {
  /*public forecasts: WeatherForecast[] = [];*/

  /*constructor(private http: HttpClient) { }*/

  //ngOnInit() {
  //  this.getForecasts();
  //}

  //getForecasts() {
  //  this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
  //    (result) => {
  //      this.forecasts = result;
  //    },
  //    (error) => {
  //      console.error(error);
  //    }
  //  );
  //}

  title = 'ptpdelivery.client';
}
