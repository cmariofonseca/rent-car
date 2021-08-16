import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trademarks } from 'src/app/shared/utils/trademarks';
import { Vehicle } from '../../models/vehicle';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-trademarks',
  templateUrl: './trademarks.component.html',
  styleUrls: ['./trademarks.component.css']
})
export class TrademarksComponent implements OnInit {

  titleOfComponent: string;
  key: string;
  brands: Array<string>;
  vehicles: Array<Vehicle>;
  secureData: Array<Vehicle>;

  constructor(
    private vehiclesSrv: VehiclesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTrademark();
    this.getVehiclesList();
    this.getVehiclesList();
  }
  
  getTrademark(): void {
    const url: Array<string> = document.location.href.split('/');
    this.key = url[url.length-1];
    this.setTitleOfComponent(this.key);
  }
  
  setTitleOfComponent(key: string): void {
    const brands = trademarks;
    this.titleOfComponent = brands[key];
  }

  getVehiclesList() {
    this.vehiclesSrv.getDataVehicles().subscribe(data => {
      this.vehicles = this.secureData = data.category[this.key];
      this.brands = Array.from(new Set(
        this.secureData.map(vehicle => vehicle.trademark)
      ));
      console.log(this.secureData);
    });
  }

  setBrandSelected(brand: string) {
    this.vehicles = this.secureData.filter(vehicle => vehicle.trademark == brand);
  }

  setVehicleSelected(vehicle: Vehicle) {
    console.log(vehicle);
    this.vehiclesSrv.setVehicleSelected(vehicle);
    this.router.navigate(['inventory/rent/vehicle']);
  }

}
