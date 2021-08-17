import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { VehiclesService } from '../../services/vehicles.service';

import { TrademarksComponent } from './trademarks.component';

describe('TrademarksComponent', () => {
  let component: TrademarksComponent;
  let fixture: ComponentFixture<TrademarksComponent>;
  let vehiclesService: any;

  beforeEach(async () => {
    const plansServiceSpy = jasmine.createSpyObj(
      'VehiclesService', ['setVehicleSelected']
    );
    await TestBed.configureTestingModule({
      declarations: [ TrademarksComponent ],
      imports: [ provideMockStore({}) ],
      providers: [
        { provide: VehiclesService, useValue: plansServiceSpy }
      ]
    }).compileComponents();
    vehiclesService = TestBed.inject(VehiclesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
