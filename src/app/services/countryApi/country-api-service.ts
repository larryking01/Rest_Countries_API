import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Country } from '../../../models/countryInterface';



@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  httpClient = inject( HttpClient )
  fields = 'all?fields=name,population,region,capital,subregion,capital,tld,currencies,languages,flags'
  rawFields = 'https://restcountries.com/v3.1/all?fields=name,population,region,capital,subregion,capital,tld,currencies,languages,flags'

  countriesUrl = `${ environment.base_url }${ this.fields }`

  constructor() { }


  fetchAllCountries() {
    return this.httpClient.get<Country []>( this.countriesUrl )
  }


  fetchCountryDetails(countryCode: string = 'TGO') {
    return this.httpClient.get<Country>(`https://restcountries.com/v3.1/alpha/${ countryCode }`)
  }


  fetchMultipleCountries() {

  }


}
