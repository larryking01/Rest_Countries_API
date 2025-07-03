import { createReducer, on } from '@ngrx/store';
import { CountryState, initialCountryState } from './countries.state';
import * as CountryActions from './countries.actions';



export const countryReducer = createReducer(
  initialCountryState,

  // Load all countries
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

  // Load single country by code
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

  // Search query
  on(CountryActions.setSearchQuery, (state, { query }) => ({
    ...state,
    searchQuery: query,
  })),

  // Filter region
  on(CountryActions.setFilterRegion, (state, { region }) => ({
    ...state,
    filterRegion: region,
  })),

  // Select a country (e.g., from border countries list)
  on(CountryActions.selectCountry, (state, { country }) => ({
    ...state,
    selectedCountry: country,
  }))
  
);
