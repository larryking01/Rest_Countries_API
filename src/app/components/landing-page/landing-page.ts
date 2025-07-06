import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Themes } from '../../services/themeService/themes';


@Component({
  selector: 'app-landing-page', 
  imports: [RouterModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage implements OnInit {

    private themeService = inject( Themes)

    ngOnInit(): void {
      this.themeService.initializeTheme()
    }
}
