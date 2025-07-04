import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTheme } from '../../../store/theme/theme.selectors';
import { toggleTheme } from '../../../store/theme/theme.actions';


@Component({
  selector: 'app-theme-switcher-component',
  imports: [],
  templateUrl: './theme-switcher-component.html',
  styleUrl: './theme-switcher-component.scss'
})
export class ThemeSwitcherComponent implements OnInit{

  private store = inject( Store )

  isDark: boolean = false


  ngOnInit(): void {
    this.store.select( selectTheme ).subscribe( theme => {
      document.body.classList.toggle('dark', theme === 'dark')
      if( theme === 'dark' ) {
        this.isDark = true
      }
      else {
        this.isDark = false
      }
    })
  }

  toggleTheme() {
     this.store.dispatch(toggleTheme())
  }


}
