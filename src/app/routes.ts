import { Routes } from "@angular/router";
import { CityAddComponent } from "./Views/city/city-add/city-add.component";
import { CityDetailComponent } from "./Views/city/city-detail/city-detail.component";
import { CityComponent } from "./Views/city/city.component";
import { ValueComponent } from "./Views/value/value.component";

export const appRoutes : Routes = [
    {
        path: "city",
        component: CityComponent
    },
    {
        path: "cityAdd",
        component: CityAddComponent
    },
    {
        path: "value",
        component: ValueComponent
    },
    {
        path: "cityDetail/:cityId",
        component: CityDetailComponent
    },
    {
        path: "**",
        redirectTo: "city",
        pathMatch: "full"
    }
];