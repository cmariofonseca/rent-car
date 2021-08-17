import { Action } from "@ngrx/store";
import { Data } from "../../models/data";
import { initialEstate } from "../../utils/initial-state";

export function vehiclesReducer(state: Data = initialEstate, action: Action) {
  console.log(action);
}
