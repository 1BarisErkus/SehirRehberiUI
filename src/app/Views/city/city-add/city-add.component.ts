import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/Controller/city.service';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { City } from 'src/app/Models/city';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers: [CityService]
})
export class CityAddComponent implements OnInit {

  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
  ) { }

  city: City = new City();
  cityAddForm: FormGroup = new FormGroup("");

  createCityForm() {
    this.cityAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.createCityForm();
  }

  add(){
    if(this.cityAddForm?.valid){
      this.city = Object.assign({}, this.cityAddForm.value);
      this.city.userId = "1";
      this.cityService.add(this.city)
    }
  }

}
