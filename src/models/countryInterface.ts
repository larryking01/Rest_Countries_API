export interface Country {
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  name: {
    common: string;
    official: string;
    nativeName?: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld?: string[];
  cca3: string,
  currencies?: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
  capital?: string[];
  region: string;
  subregion?: string;
  languages?: {
    [langCode: string]: string;
  };
  population: number;
  borders: string[]
}
