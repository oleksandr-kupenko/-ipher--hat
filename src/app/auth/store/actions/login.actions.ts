import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "./actionTypes";
import {RegisterRequestInterface} from "../../auth.interfaces";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: RegisterRequestInterface}>()
);
