import { Component, inject, OnInit } from '@angular/core';
import { Themes } from '../../services/themeService/themes';
// import { Store } from '@ngrx/store';
// import { selectTheme } from '../../../store/theme/theme.selectors';
// import { toggleTheme } from '../../../store/theme/theme.actions';


@Component({
  selector: 'app-theme-switcher-component',
  imports: [],
  templateUrl: './theme-switcher-component.html',
  styleUrl: './theme-switcher-component.scss'
})
export class ThemeSwitcherComponent implements OnInit{

  themeService = inject( Themes )


  ngOnInit(): void {
    this.themeService.initializeTheme()
  }

  toggleTheme() {
    this.themeService.switchTheme()
  }


}
