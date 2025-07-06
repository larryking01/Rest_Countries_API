import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryApiService } from '../../app/services/countryApi/country-api-service';
import * as CountryActions from './countries.actions';
import { catchError, map, mergeMap, of, retry } from 'rxjs';



export class CountryEffects {
  private actions$ = inject(Actions);
  private countryApiService = inject(CountryApiService);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountries),
      mergeMap(() =>
        this.countryApiService.fetchAllCountries().pipe(
          retry(2),
          map((countries) => CountryActions.loadCountriesSuccess({ countries })),
          catchError((error) =>
            of(CountryActions.loadCountriesFailure({ error: "Oops! Something went wrong. We couldn’t load country data at the moment — maybe the internet took a little trip. Please check your connection and try again." }))
          )
        )
      )
    )
  );


  loadCountryByCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountryByCode),
      mergeMap(({ code }) =>
        this.countryApiService.fetchCountryByCode(code).pipe(
          map((country) => CountryActions.loadCountryByCodeSuccess({ country })),
          catchError((error) =>
            of(CountryActions.loadCountryByCodeFailure({ error: "Something went wrong while fetching data for this country. Either the Alpha Code was not found or your connection is poor. Please verify and try again." }))
          )
        )
      )
    )
  );

  
}
