import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher-component/theme-switcher-component';

@Component({
  selector: 'app-navbar',
  imports: [ThemeSwitcherComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  

}
