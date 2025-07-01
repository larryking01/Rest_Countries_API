import { createAction, props } from '@ngrx/store'
import { Country } from '../../models/countryInterface'



export const loadCountries = createAction('[Country List] Load All Countries')

export const loadCountriesSuccess = createAction(
    '[Country API] Load Countries Success', 
    props<{country: Country[]}>()
)

export const loadCountriesFailure = createAction(
    '[Countries API] Load Countries Failure',
    props<{error: string}>()
)

export const loadCountryByCode = createAction(
    '[Country API] Load Country By Code',
    props<{ code: string }>()
)

export const loadCountryByCodeSuccess = createAction(
  '[Country API] Load Country By Code Success',
  props<{ country: Country }>()
)

export const loadCountryByCodeFailure = createAction(
  '[Country API] Load Country By Code Failure',
  props<{ error: string }>()
)

export const setSearchQuery = createAction(
  '[Country Filter] Set Search Query',
  props<{ query: string }>()
)

export const setFilterRegion = createAction(
  '[Country Filter] Set Filter Region',
  props<{ region: string }>()
)

export const selectCountry = createAction(
  '[Country] Select Country',
  props<{ country: Country }>()
)


