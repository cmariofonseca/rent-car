import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VehicleComponent } from './vehicle.component';
import { VehiclesService } from '../../services/vehicles.service';
import { vehiclesReducer } from '../../ngrx/reducers/vehicles.reducer';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let vehiclesService: any;

  beforeEach(async () => {
    const plansServiceSpy = jasmine.createSpyObj(
      'VehiclesService', ['getVehicleSelected']
    );
    await TestBed.configureTestingModule({
      declarations: [ VehicleComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: VehiclesService, useValue: plansServiceSpy }
      ]
    }).compileComponents();
    vehiclesService = TestBed.inject(VehiclesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    vehiclesService.getVehicleSelected.and.returnValue(vehiclesReducer);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
