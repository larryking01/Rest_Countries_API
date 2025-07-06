# Rest Countries API

## Project Description
A responsive Angular application that displays detailed information about countries using the [REST Countries API](https://restcountries.com/). 
It allows users to browse and search for countries by name, filter them by region, view detailed information about each country (including border countries), and switch between light and dark themes. 
It provides a clean UI and maintains a global app state using NgRx.



## Setup & Run Instructions

1. **Clone the repository**
git clone https://github.com/larryking01/Rest_Countries_API
cd Rest_Countries_API


2. **Install dependencies**
npm install


3. **Run the development server**
ng serve


4. Open your browser at http://localhost:4200 



## Application Features
✅ Search countries by name

✅ Filter countries by region

✅ View detailed information on each country

✅ View border countries and navigate to them

✅ Light/Dark theme switching

✅ 404 Not Found page for unknown routes

✅ Fully responsive and mobile-friendly design



## Component Structure
Component	                                               Description
# country-list-component	                       Displays searchable and filterable list of 

# country-details-component	                       Displays full details of a selected country

# theme-switcher-component	                       Button to toggle between light and dark mode

# not-found-component	                           Handles 404 page display for unmatched routes

# error-banner                                     Displays user-friendly error messages to users on
                                                   http requests failure.



## Services Structure
Folder                                                       Description
# countryAPI                                      Handles API requests to the rest countries api. 

# themeService                                    Contains methods to initialize and toggle theme using the
                                                  NgRX theme store. This service is injected by the
                                                  theme-switcher-component for theme operations.

# errors                                          Contains error handling logic. Displays error to users in
                                                  the case of a failed API call to fetch all countries or
                                                  load a selected country's full details.



## Models Folder - contains two files define the shape of a country and theme respectively.
File                                                             Description
# countryInterface.ts                             Defines a country object based on the REST Countries API
                                                  response and the specifications provided in the Figma design.


# themeInterface.ts                               Defines a theme object.
                                                  


## 🧭 Routing Overview
Route	                                                            Description
# /	                                                   Home page displaying all countries

# /country-details/:code	                           Details page for a selected country

# **	                                               Wildcard route redirects to 404 page

Routing is configured using Angular's standalone routing system.




## 🌐 API Consumption
The app consumes the REST Countries API v3.1 to fetch data about all countries.

GET all countries: https://restcountries.com/v3.1/all?fields=name,population,region,capital,subregion,cca3,capital,currencies,languages,flags'

'fields' param is compulsory to specify what part of the country data you want, otherwise the server returns
a bad response.

GET country by code: https://restcountries.com/v3.1/alpha/{code}

API calls are handled in a dedicated CountryApiService.




## 🧠 NgRx Store Implementation
NgRx is used to manage application state for countries and theme.

# Country State:
* Actions: loadCountries, loadCountryByCode, setSearchQuery, setFilterRegion, selectCountry

* Reducer: Updates state based on loading, error, and filtering conditions

* Effects: Side effects for async API calls (fetching country list and single country)

* Selectors: Retrieve filtered, searched, or selected countries from state



# Theme State:
* Actions: toggleTheme, setTheme

* Reducer: Switches between light and dark modes

* Effects: Persists the selected theme to localStorage and loads it on startup

* Selectors: Retrieve set theme




## 🎨 Theme Switching Implementation
* User can toggle between light and dark themes using the theme switcher.

* Theme state is managed with NgRx and persisted in localStorage.

* The <body> element is updated with a .dark class to apply appropriate CSS variables.

* CSS uses var(--font-col), --theme-bg, etc., to support both themes.




## 🌿 Git Workflow
The project uses a simple branching strategy:

main: Production-ready code

development: Active development branch

Changes are committed with meaningful messages and merged using pull requests.


