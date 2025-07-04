import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher-component/theme-switcher-component';

@Component({
  selector: 'app-navbar',
  imports: [ThemeSwitcherComponent, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  

}
