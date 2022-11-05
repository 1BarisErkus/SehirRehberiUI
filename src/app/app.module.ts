import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValueComponent } from './Views/value/value.component';
import { NavComponent } from './Views/nav/nav.component';
import { CityComponent } from './Views/city/city.component';
import { CityDetailComponent } from './Views/city/city-detail/city-detail.component';
import { CityAddComponent } from './Views/city/city-add/city-add.component';
import { AlertifyService } from './Controller/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent,
    CityAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
