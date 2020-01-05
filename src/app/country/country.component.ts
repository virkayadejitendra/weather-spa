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
  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        //this.lat = 48.8566;//position.coords.latitude;
        //this.lng =2.3522;// position.coords.longitude;
//console.log(this.lat + " " +this.lng);
      });
    }
  }

}
