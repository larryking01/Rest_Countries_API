import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTheme } from '../../../store/theme/theme.selectors';
import { toggleTheme } from '../../../store/theme/theme.actions';



@Injectable({
  providedIn: 'root'
})
export class Themes {

  private store = inject(Store)

  isDarkMode: boolean = false

  constructor() { }

  initializeTheme() {
    this.store.select( selectTheme ).subscribe( theme => {
      document.body.classList.toggle('dark', theme === 'dark')
      this.setDarkModeStatus( theme )
    })
  }


  setDarkModeStatus( theme: string ) {
    if( theme === 'dark' ) {
      this.isDarkMode = true 
    }
    else {
      this.isDarkMode = false 
    }
  }


  switchTheme() {
    this.store.dispatch( toggleTheme() )
  }

}
