import { Country } from "./country";
import { Currency } from "./currency.type";
import { Region } from "./region.type";


export interface CacheStore {
  byCapital:   TermCountries;
  byCountries: TermCountries;
  byRegion:    RegionCountries;
  byCurrency:  CurrencyCountries;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  region:    Region;
  countries: Country[];
}

export interface CurrencyCountries {
  currency: Currency;
  countries: Country[];

}
