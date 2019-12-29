import { Component, OnInit } from '@angular/core';
import { Region } from '../_models/wetherModels';
import { CountryDetails } from '../_models/regionModels';
import { WetherService } from '../_services/wether.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(private wetherService: WetherService) { }
  show: boolean;
  selectedRegion: string;
  selectedCountry: string;
  selectedCity: string;
  regions: Region[] = [
    { id: 1, name: 'Europe' },
    { id: 2, name: 'Asia' },
    { id: 3, name: 'Africa' }
  ];

  allCountryDetails: CountryDetails[];

  ngOnInit() {
  }
  regionSelectionChange() {
    this.getRegionDetails();
  }
  getRegionDetails() {
    this.wetherService.getCitiesInRegion(this.selectedRegion)
      .subscribe((details: CountryDetails[]) => {
        this.allCountryDetails = details;
      }, error => {
        console.log(error);
      });
  }


}
