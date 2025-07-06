import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTheme } from '../../../store/theme/theme.selectors';
import { CountryState } from '../../../store/countries/countries.state';
import { loadCountryByCode } from '../../../store/countries/countries.actions';
import { selectBorderCountries, selectSelectedCountry, selectError } from '../../../store/countries/countries.selectors';
import { Navbar } from '../navbar/navbar';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ErrorBanner } from '../error-banner/error-banner';


@Component({
  selector: 'app-country-details-component',
  imports: [AsyncPipe, Navbar, CommonModule, RouterModule, ErrorBanner],
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

  errors$ = this.store.select(selectError)

  isDark: boolean = false;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      const code = params.get('code')
      if( code ) {
        this.store.dispatch(loadCountryByCode({ code }))
      }
    })

    
    this.getCurrentTheme()

  }


  getCurrentTheme() {
    this.store.select( selectTheme ).subscribe( theme => {
      if( theme === 'dark') {
        this.isDark = true
      }
      else {
        this.isDark = false
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
