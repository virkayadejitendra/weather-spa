import { Component, OnInit } from "@angular/core";
import { Region, City } from "../_models/wetherModels";
import { CountryDetails } from "../_models/regionModels";
import { WetherService } from "../_services/wether.service";
import { stringify } from 'querystring';

@Component({
  selector: "app-region",
  templateUrl: "./region.component.html",
  styleUrls: ["./region.component.css"]
})
export class RegionComponent implements OnInit {
  constructor(private wetherService: WetherService) {}
  show: boolean;
  selectedRegion: string;
  selectedCountry: CountryDetails;
  selectedCity: City;
  regions: Region[] = [
    { id: 1, name: "Europe" },
    { id: 2, name: "Asia" },
    { id: 3, name: "Africa" }
  ];

  allCountryDetails: CountryDetails[];

  ngOnInit() {}
  regionSelectionChange() {
    this.getRegionDetails();
  }
  x: any;
  citySelectionChange() {
    this.x = { name : "a" };
  }
  getRegionDetails() {
    this.wetherService.getCitiesInRegion(this.selectedRegion).subscribe(
      (details: CountryDetails[]) => {
        this.allCountryDetails = details;
      },
      error => {
        console.log(error);
      }
    );
  }
}
