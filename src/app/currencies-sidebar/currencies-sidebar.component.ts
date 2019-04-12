import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-currencies-sidebar',
  templateUrl: './currencies-sidebar.component.html',
  styleUrls: ['./currencies-sidebar.component.scss']
})
export class CurrenciesSidebarComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(data => this.countries = data);
  }

}
