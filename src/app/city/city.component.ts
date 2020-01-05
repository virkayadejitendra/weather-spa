import { Component, OnInit, Input } from '@angular/core';
import { WetherService } from '../_services/wether.service';
import { City } from '../_models/wetherModels';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() city: City;

  constructor(private wetherService: WetherService) {
  }

  ngOnInit() {
  }

}
