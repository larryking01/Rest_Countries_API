import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CountryState } from '../../../store/countries/countries.state';
import { loadCountryByCode } from '../../../store/countries/countries.actions';
import { selectBorderCountries, selectSelectedCountry } from '../../../store/countries/countries.selectors';
import { CountryApiService } from '../../services/countryApi/country-api-service';
import { Navbar } from '../navbar/navbar';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-details-component',
  imports: [AsyncPipe, Navbar, CommonModule, RouterModule],
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
    this.activatedRoute.paramMap.subscribe( params => {
      const code = params.get('code')

      if( code ) {
        this.store.dispatch(loadCountryByCode({ code }))
      }
    })

  }

  goToDetails(code: string) {
    this.router.navigate(['/country-details', code])
  }

  getLanguageList( languages: {[code: string]: string} | undefined ): string {
    return languages ? Object.values(languages).join(', ') : 'N/A'
  }

  getCurrencyList( currencies: {[code: string]: { name: string, symbol: string }} | undefined) : string {
    return currencies ? Object.values( currencies ).map( currency => currency.name ).join(', ') : 'N/A'
  }

}
