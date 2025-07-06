import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Country } from '../../../models/countryInterface';



@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  httpClient = inject( HttpClient )

  countriesUrl = `${ environment.base_url }${ environment.fields }`

  constructor() { }


  fetchAllCountries() {
    return this.httpClient.get<Country []>( this.countriesUrl )
  }


  fetchCountryByCode(countryCode: string) {
    return this.httpClient.get<Country[]>(`${ environment.alphaCodeUrl }${ countryCode }`)
    .pipe(
      map((response: Country[]) => response[0])
    )
  }


}
