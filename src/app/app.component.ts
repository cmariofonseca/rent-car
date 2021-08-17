import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { VehiclesService } from './modules/inventory/services/vehicles.service';
import { Data } from './modules/inventory/interfaces/data';
import { LoadDataAction } from './modules/inventory/ngrx/actions/vehicles.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'rent-car';

  constructor(
    private store: Store<Data>,
    private vehiclesSrv: VehiclesService
  ) { }
  
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.vehiclesSrv.getDataVehicles().subscribe(data => {
      const action = new LoadDataAction(data.category);
      this.store.dispatch(action);
    });
  }

}
