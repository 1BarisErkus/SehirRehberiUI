import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Value } from '../../Models/value';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getValues();
  }

  values: Value[] = [];

  getValues() {
    return this.http.get<Value[]>('http://localhost:5270/Value').subscribe(data => this.values = data);
  }

}
