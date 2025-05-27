import { createFeatureSelector, createSelector } from "@ngrx/store";
// import {authReducer} from "../reducers/auth.reducer"
import { AuthState } from "../../core/model/loginData.model";





const getAuthState = createFeatureSelector<AuthState>('auth')

export const selectIsAuthenticated = createSelector(
    getAuthState,
    (state:AuthState) => state.isAuthenticated
);

export const selectToken = createSelector(
    getAuthState,
    (state: AuthState) => state.token
  );