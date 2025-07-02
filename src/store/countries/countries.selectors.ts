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


export const selectSearchedCountries = createSelector(
  selectAllCountries,
  selectSearchQuery,
  (countries, query) => {
    if (!query) return countries;
    const lower = query.toLowerCase();
    return countries.filter(country =>
      country.name.common.toLowerCase().includes(lower)
    );
  }
);


export const selectRegionFilteredCountries = createSelector(
  selectSearchedCountries,
  selectFilterRegion,
  (countries, region) => {
    if (!region) return countries;
    const lower = region.toLowerCase();
    return countries.filter(country =>
      country.region.toLowerCase() === lower
    );
  }
);


export const selectFilteredCountries = selectRegionFilteredCountries;
