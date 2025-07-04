import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CountryState } from '../../../store/countries/countries.state';
import { loadCountryByCode } from '../../../store/countries/countries.actions';
import { selectBorderCountries, selectSelectedCountry } from '../../../store/countries/countries.selectors';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CountryApiService } from '../../services/countryApi/country-api-service';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-country-details-component',
  imports: [AsyncPipe, JsonPipe, Navbar],
  templateUrl: './country-details-component.html',
  styleUrl: './country-details-component.scss'
})
export class CountryDetailsComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute)
  private store = inject(Store<{countries: CountryState}>)
  private location = inject( Location )
  private router = inject( Router )

  country$ = this.store.select(selectSelectedCountry)

  borderCountries$ = this.store.select(selectBorderCountries)


  ngOnInit(): void {
    // const code = this.activatedRoute.snapshot.paramMap.get('code')
    // if( code ) {
    //   this.store.dispatch(loadCountryByCode({ code }))
    // }

    this.activatedRoute.paramMap.subscribe( params => {
      const code = params.get('code')

      if( code ) {
        this.store.dispatch(loadCountryByCode({ code }))
      }
    })


  }


  goToCountryList() {
    this.router.navigate(['/'])
  }

  goToDetails(code: string) {
    this.router.navigate(['/country-details', code])
  }



}
