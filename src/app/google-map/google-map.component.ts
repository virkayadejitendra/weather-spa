import { Component, OnInit, Input } from '@angular/core';
import { City } from '../_models/wetherModels';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() city:City;
  constructor() { }

  ngOnInit() {
  //  this.getUserLocation();
  }
  
}
