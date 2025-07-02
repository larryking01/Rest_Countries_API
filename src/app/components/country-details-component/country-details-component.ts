import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CountryState } from '../../../store/countries/countries.state';
import { loadCountryByCode } from '../../../store/countries/countries.actions';
import { selectSelectedCountry } from '../../../store/countries/countries.selectors';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CountryApiService } from '../../services/countryApi/country-api-service';

@Component({
  selector: 'app-country-details-component',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './country-details-component.html',
  styleUrl: './country-details-component.scss'
})
export class CountryDetailsComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute)
  private store = inject(Store<{countries: CountryState}>)
  private location = inject( Location )

  country$ = this.store.select(selectSelectedCountry)


  ngOnInit(): void {
    const code = this.activatedRoute.snapshot.paramMap.get('code')

    if( code ) {
      this.store.dispatch(loadCountryByCode({ code }))
    }
  }


  goToCountryList() {
    this.location.back()
  }

}
