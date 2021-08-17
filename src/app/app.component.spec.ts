import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';
import { VehiclesService } from './modules/inventory/services/vehicles.service';
import { dataMock } from './test/inventory/data';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let vehiclesService: any;

  beforeEach(async () => {
    const plansServiceSpy = jasmine.createSpyObj(
      'VehiclesService', ['getDataVehicles']
    );
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientTestingModule,
        provideMockStore({})
      ],
      providers: [
        { provide: VehiclesService, useValue: plansServiceSpy }
      ]
    }).compileComponents();
    vehiclesService = TestBed.inject(VehiclesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    vehiclesService.getDataVehicles.and.returnValue(dataMock);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
