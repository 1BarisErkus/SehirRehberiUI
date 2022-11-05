import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../Models/city';
import { Photo } from '../Models/photo';
import { AlertifyService } from './alertify.service';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) { }

  path = 'http://localhost:5270/';

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.path + 'City');
  }

  getCityById(cityId: any): Observable<City> {
    return this.http.get<City>(this.path + 'City/details/?id=' + cityId);
  }

  getPhotosByCity(cityId: any): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.path + 'City/photos/?cityId=' + cityId)
  }

  add(city: any) {
    this.http.post(this.path + 'City/add', city).subscribe((data) => {
      this.alertifyService.success('Şehir başarıyla eklendi');
      //this.router.navigateByUrl('/cityDetail/' + data["id"]);
    });
  }

}
