import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from './countries.state';


export const selectCountryState = createFeatureSelector<CountryState>('countries');


export const selectAllCountries = createSelector(
  selectCountryState,
  (state) => state.countries
)

export const selectSelectedCountry = createSelector(
  selectCountryState,
  (state) => state.selectedCountry
)

export const selectSearchQuery = createSelector(
  selectCountryState,
  (state) => state.searchQuery
)

export const selectFilterRegion = createSelector(
  selectCountryState,
  (state) => state.filterRegion
)

export const selectLoading = createSelector(
  selectCountryState,
  (state) => state.loading
)

export const selectError = createSelector(
  selectCountryState,
  (state) => state.error
)




export const selectFilteredCountries = createSelector(
  selectAllCountries,
  selectSearchQuery,
  selectFilterRegion,
  (countries, query, region) => {
    return countries.filter(country => {
      const matchesRegion = region ? country.region.toLowerCase() === region.toLowerCase() : true;
      const matchesSearch = country.name.common.toLowerCase().includes(query.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }
);
