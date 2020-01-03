import { Component, OnInit, Input } from '@angular/core';
import { CountryDetails } from '../_models/regionModels';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() country: CountryDetails;
  imageUrl: string;
  constructor() {
  }
  ngOnInit() {
    this.imageUrl = 'https://lipis.github.io/flag-icon-css/flags/4x3/' + this.country.alpha2Code.toLocaleLowerCase() + '.svg';

  }

}
