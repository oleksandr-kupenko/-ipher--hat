import {AuthStateInterface} from "../auth.interfaces";
import {createReducer, on} from "@ngrx/store";
import {loginAction} from "./actions/login.actions";

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthStateInterface => ({...state, isSubmitting: true})
  )
);

export const authFeatureKey = 'auth';
