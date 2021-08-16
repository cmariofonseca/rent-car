import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { RentComponent } from './components/rent/rent.component';
import { TrademarksComponent } from './components/trademarks/trademarks.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'rent',
        children: [
          { path: '', component: RentComponent },
          { path: 'category/:id', component: TrademarksComponent },
          { path: 'vehicle', component: VehicleComponent }
        ]
      },
      { path: '**', redirectTo: 'welcome' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }