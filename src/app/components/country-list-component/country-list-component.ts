import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CountryApiService } from '../../services/countryApi/country-api-service';
import { Store } from '@ngrx/store'
import { Subscription, tap, debounceTime, distinctUntilChanged } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { loadCountries, setSearchQuery, setFilterRegion } from '../../../store/countries/countries.actions';
import { selectError, selectFilteredCountries, selectLoading } from '../../../store/countries/countries.selectors';
import { Navbar } from '../navbar/navbar';



@Component({
  selector: 'app-country-list-component',
  imports: [AsyncPipe, CommonModule, ReactiveFormsModule, Navbar],
  templateUrl: './country-list-component.html',
  styleUrl: './country-list-component.scss'
})
export class CountryListComponent implements OnInit, OnDestroy {
  private store = inject(Store)
  private subscriptions = new Subscription()
  private router = inject( Router )

  countries$ = this.store.select(selectFilteredCountries)

  loading$ = this.store.select(selectLoading)

  errors$ = this.store.select(selectError)

  countryApiService = inject( CountryApiService )

  searchControl = new FormControl('')
  regionControl = new FormControl('')


  ngOnInit(): void {
    this.store.dispatch(setSearchQuery({ query: '' }));
    this.store.dispatch(setFilterRegion({ region: '' }));

    
    this.subscriptions.add(
      this.countries$
        .subscribe( countries => {
          if(!countries || countries.length === 0 ) {
            this.store.dispatch(loadCountries())
          }
        })
    )


    // search listener
    this.subscriptions.add(
      this.searchControl.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((query: string | null ) => {
        this.store.dispatch(setSearchQuery({ query: query ?? '' }))
      })
    )


    // filter listener
    this.subscriptions.add(
      this.regionControl.valueChanges.subscribe(( region: string | null ) => {
        this.store.dispatch(setFilterRegion({ region: region ?? '' }))
      })
    )

  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }


  retryLoad() {
    this.store.dispatch(loadCountries())
  }


  goToDetails(code: string) {
    this.router.navigate(['country-details', code])
  }

}
