import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { countryReducer } from '../store/countries/countries.reducer';
import { themeReducer } from '../store/theme/theme.reducer';
import { CountryEffects } from '../store/countries/countries.effects';
import { ThemeEffects } from '../store/theme/theme.effects';
import { routes } from './app.routes';




export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ 
      countries: countryReducer,
      theme: themeReducer
     }),
    provideEffects([ CountryEffects, ThemeEffects ])
  ]
};
