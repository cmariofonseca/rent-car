import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CarouselComponent } from './components/carousel/carousel.component';
import { RentComponent } from './components/rent/rent.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TrademarksComponent } from './components/trademarks/trademarks.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

@NgModule({
  declarations: [
    CarouselComponent,
    RentComponent,
    WelcomeComponent,
    TrademarksComponent,
    VehicleComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
