import { createReducer, on, State } from '@ngrx/store';
import { initialCountryState } from './countries.state';
import * as CountryActions from './countries.actions';



export const countryReducer = createReducer(
  initialCountryState,

  on(CountryActions.loadCountries, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(CountryActions.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
    loading: false,
  })),

  on(CountryActions.loadCountriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(CountryActions.loadCountryByCode, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(CountryActions.loadCountryByCodeSuccess, (state, { country }) => ({
    ...state,
    selectedCountry: country,
    loading: false,
  })),

  on(CountryActions.loadCountryByCodeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(CountryActions.setSearchQuery, (state, { query }) => ({
    ...state,
    searchQuery: query,
  })),

  on(CountryActions.setFilterRegion, (state, { region }) => ({
    ...state,
    filterRegion: region,
  })),

  on(CountryActions.selectCountry, (state, { country }) => ({
    ...state,
    selectedCountry: country,
  })),

  on(CountryActions.clearError, (state) => ({
    ...state,
    error: null
  }))
  
);
