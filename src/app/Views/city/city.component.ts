import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/Controller/city.service';
import { City } from 'src/app/Models/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService]
})
export class CityComponent implements OnInit {

  constructor(
    private cityService: CityService
  ) { }

  cities: City[] = [];

  ngOnInit(): void {
    this.cityService.getCities().subscribe((data) => {
      this.cities = data;
    })
  }
  

}
