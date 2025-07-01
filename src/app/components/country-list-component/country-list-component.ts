import { Component, inject, OnInit } from '@angular/core';
import { CountryApiService } from '../../services/countryApi/country-api-service';

@Component({
  selector: 'app-country-list-component',
  imports: [],
  templateUrl: './country-list-component.html',
  styleUrl: './country-list-component.scss'
})
export class CountryListComponent implements OnInit {
  countryApiService = inject( CountryApiService )


  ngOnInit(): void {
    console.log('all countries fetched...')
    
    this.countryApiService.fetchAllCountries().subscribe({
      next: ( data ) => console.log('all countries = ', data),
      error: ( err ) => console.error('failed to fetch countries due to error ', err )
    })
  }



}
