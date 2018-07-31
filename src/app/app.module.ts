import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReadingsComponent } from './readings/readings.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule} from '@angular/common/http';
import { PeriodsComponent } from './periods/periods.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReadingsComponent,
    HomeComponent,
    PeriodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
