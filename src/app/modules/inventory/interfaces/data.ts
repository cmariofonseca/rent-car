import { Vehicle } from "./vehicle";

export interface Data {
  category: Category
}

export interface Category {
  automobiles: Array<Vehicle>;
  pickups: Array<Vehicle>;
  suv: Array<Vehicle>;
  trucks: Array<Vehicle>;
}