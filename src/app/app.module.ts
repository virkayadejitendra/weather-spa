import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { MatNativeDateModule } from "@angular/material/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatListModule } from "@angular/material/list";
import { DemoMaterialModule } from "../app/materialModules/DemoMaterialModule";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavtabsComponent } from "./navtabs/navtabs.component";
import { RegionComponent } from "./region/region.component";
import { CityComponent } from "./city/city.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { CountryComponent } from "./country/country.component";
import { environment } from "src/environments/environment";
import { AgmCoreModule } from "@agm/core";
import { AngularFireModule } from "@angular/fire";
import { GoogleMapComponent } from './google-map/google-map.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavtabsComponent,
    RegionComponent,
    CityComponent,
    CountryComponent,
    GoogleMapComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    DemoMaterialModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
