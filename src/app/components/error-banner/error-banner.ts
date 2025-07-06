import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCountries, clearError, loadCountryByCode } from '../../../store/countries/countries.actions';

@Component({
  selector: 'app-error-banner',
  imports: [],
  templateUrl: './error-banner.html',
  styleUrl: './error-banner.scss'
})
export class ErrorBanner {

  private store = inject( Store )

  @Input() httpError: string | null = null


  retryLoad() {
    this.store.dispatch(loadCountries())
  }

  refreshPage() {
    window.location.reload()
  }


  closeError() {
    this.store.dispatch(clearError())
  }

}
