import { Component, OnInit, Input } from '@angular/core';
import { WetherService } from '../_services/wether.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() city: string;

  constructor(private wetherService: WetherService) {
  }

  ngOnInit() {
  }

}
