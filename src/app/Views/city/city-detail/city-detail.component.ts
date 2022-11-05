import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/Controller/city.service';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/Models/city';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers: [CityService]
})
export class CityDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) { }

    city: City = new City();

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCityById(params["cityId"])
    });
  }

  getCityById(cityId: any) {
    this.cityService.getCityById(cityId).subscribe((data) => {
      this.city = data;
    });
  }

}
