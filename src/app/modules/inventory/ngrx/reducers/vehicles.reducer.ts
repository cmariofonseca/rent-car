import { Category } from "../../interfaces/data";
import { actions } from "../actions/vehicles.action";
import { initialEstate } from "../../utils/initial-state";
import { LOAD_DATA } from "../../utils/constant";

export function vehiclesReducer(state: Category = initialEstate.category, action: actions): Category {
  switch (action.type) {
    case LOAD_DATA:
      const data: Category = action.payload;
      return { ...state, ...data };
    default:
      break;
  }
}
