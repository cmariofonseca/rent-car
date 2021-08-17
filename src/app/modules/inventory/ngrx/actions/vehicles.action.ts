import { Action } from "@ngrx/store";
import { Category } from "../../interfaces/data";
import { LOAD_DATA } from "../../utils/constant";

export class LoadDataAction implements Action {
  readonly type = LOAD_DATA;
  constructor(public payload: Category) {}
}

export type actions = LoadDataAction;
