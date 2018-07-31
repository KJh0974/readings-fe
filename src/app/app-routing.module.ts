import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ReadingsComponent} from './readings/readings.component';
import {PeriodsComponent} from './periods/periods.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'readings',
    component: ReadingsComponent
  },
  {
    path: 'periods',
    component: PeriodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
