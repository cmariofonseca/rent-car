import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle: Vehicle;

  constructor(private vehiclesSrv: VehiclesService) { }

  ngOnInit(): void {
    this.vehicle = this.vehiclesSrv.getVehicleSelected();
  }

}
