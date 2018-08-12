import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InvoicesComponent} from './invoices/invoices.component';
import {MetersComponent} from './meters/meters.component';
import {AddressesComponent} from './addresses/addresses.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'invoices',
    component: InvoicesComponent
  },
  {
    path: 'meters',
    component: MetersComponent
  },
  {
    path: 'addresses',
    component: AddressesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
