import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../model/country.model';
import { CapitalService } from '../service/capital.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService, private capitalService: CapitalService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(data => this.countries = data);
  }

  setCapital(capital: string) {
    this.capitalService.getCapitalDetails(capital);
  }
}
