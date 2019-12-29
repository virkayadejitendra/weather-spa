import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData, City } from '../_models/wetherModels';
import { HttpClient } from '@angular/common/http';
import { CountryDetails } from '../_models/regionModels';

@Injectable({
  providedIn: 'root'
})
export class WetherService {

  baseUrlRegion = 'http://restcountries.eu/rest/v2/region/';
  baseUrlWether = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e3fa21483e20ebbe351886e181f4cc3a';
  constructor(private http: HttpClient) { }

  // getRegions

  public getCitiesInRegion(region: string): Observable<CountryDetails[]> {
    return this.http.get<CountryDetails[]>(this.baseUrlRegion + region);
  }

  public getwethedata(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.baseUrlWether + city);


  }


}
