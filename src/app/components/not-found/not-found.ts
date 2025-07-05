import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Themes } from '../../services/themeService/themes';


@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound implements OnInit {

  themeService = inject( Themes )


  ngOnInit(): void {
    this.themeService.initializeTheme()
  }


}
