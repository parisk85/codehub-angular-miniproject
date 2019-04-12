import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapitalService } from '../service/capital.service';
import { Capital } from '../model/capital.model';
import { CountryService } from '../service/country.service';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  capital: string;
  capitalDetails: Capital;

  constructor(private route: ActivatedRoute, private capitalService: CapitalService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.capital = params['capital']);    
    this.capitalService.getCapitalDetails(this.capital).subscribe(data => this.capitalDetails = data);    
  }

}
