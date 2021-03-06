import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capital } from '../model/capital.model';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  capital: Capital;
  capitalUrl: string = "https://restcountries.eu/rest/v2/capital/";

  constructor(private http: HttpClient) { }

  getCapitalDetails(capital: string) {
    this.http.get<Capital>(this.capitalUrl + capital).subscribe(data => this.capital = data);
  }

}
