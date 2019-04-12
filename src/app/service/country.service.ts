import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countriesUrl = "https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies";

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>(this.countriesUrl);
  }
}
