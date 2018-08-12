import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule} from '@angular/common/http';
import { InvoicesComponent } from './invoices/invoices.component';
import { MetersComponent } from './meters/meters.component';
import { AddressesComponent } from './addresses/addresses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InvoicesComponent,
    MetersComponent,
    AddressesComponent
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
