import { Routes } from '@angular/router';
import { CountryDetailsComponent } from './components/country-details-component/country-details-component';
import { CountryListComponent } from './components/country-list-component/country-list-component';
import { NotFound } from './components/not-found/not-found';
// import { LandingPage } from './components/landing-page/landing-page';



export const routes: Routes = [
    {
        path: '',
        component: CountryListComponent,
        title: 'All countries'
    },
    {
        path: 'country-details/:code',
        component: CountryDetailsComponent,
        title: 'Country details'
    },
    // {
    //     path: 'Welcome',
    //     component: LandingPage,
    //     title: 'Landing page'
    // },
    {
        path: '**',
        component: NotFound,
        title: '404 Not Found'
    }
];
