import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryApiService } from '../../app/services/countryApi/country-api-service';
import * as CountryActions from './countries.actions';
import { catchError, map, mergeMap, of, retry } from 'rxjs';



export class CountryEffects {
  private actions$ = inject(Actions);
  private countryApiService = inject(CountryApiService);

  // === Load all countries ===
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountries),
      mergeMap(() =>
        this.countryApiService.fetchAllCountries().pipe(
          retry(2),
          map((countries) => CountryActions.loadCountriesSuccess({ countries })),
          catchError((error) =>
            of(CountryActions.loadCountriesFailure({ error: error.message }))
          )
        )
      )
    )
  );


  // === Load country by code ===
  loadCountryByCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountryByCode),
      mergeMap(({ code }) =>
        this.countryApiService.fetchCountryByCode(code).pipe(
          map((country) => CountryActions.loadCountryByCodeSuccess({ country })),
          catchError((error) =>
            of(CountryActions.loadCountryByCodeFailure({ error: error.message }))
          )
        )
      )
    )
  );

  
}
