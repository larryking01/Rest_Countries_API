import { Country } from '../../models/countryInterface';


export interface CountryState {
  countries: Country[];
  selectedCountry: Country | null;
  searchQuery: string;
  filterRegion: string;
  loading: boolean;
  error: string | null;
}


export const initialCountryState: CountryState = {
  countries: [],
  selectedCountry: null,
  searchQuery: '',
  filterRegion: '',
  loading: false,
  error: null,
};
