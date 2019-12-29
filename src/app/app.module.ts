import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatListModule } from '@angular/material/list';
import { DemoMaterialModule } from '../app/materialModules/DemoMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavtabsComponent } from './navtabs/navtabs.component';
import { RegionComponent } from './region/region.component';
import { CityComponent } from './city/city.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      NavtabsComponent,
      RegionComponent,
      CityComponent
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
      CommonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
