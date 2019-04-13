import { Component, OnInit, Input } from '@angular/core';
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

  capitalDetails: Capital;

  constructor(private capitalService: CapitalService) { }

  ngOnInit() {
    this.capitalDetails = this.capitalService.capital;
  }
}
