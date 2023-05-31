import { Component } from '@angular/core';
import { Country, Currencies } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Currency } from '../../interfaces/currency.type';

@Component({
  selector: 'shared-by-currency',
  templateUrl: './by-currency-page.component.html',
  styles: [
  ]
})
export class ByCurrencyPageComponent {

  public countries: Country[] = [];
  public currencies: Currency[] = ['dollar','euro','peso'];
  public selectedCurrency?: Currency;

  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCurrency.countries;
    this.selectedCurrency = this.countriesService.cacheStore.byCurrency.currency;
  }

  searchByCurrency( currency: Currency):void {


    this.selectedCurrency = currency;
    this.isLoading = true;

    this.countriesService.searchCurrency( currency )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      } )
  }
}
