import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthStateInterface} from "../auth.interfaces";
import * as authReducers from 'src/app/auth/store/reducers';

const authFeatureSelector = createFeatureSelector<AuthStateInterface>(
  authReducers.authFeatureKey
);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
