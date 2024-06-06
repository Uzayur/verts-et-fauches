import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Calendar } from 'primeng/calendar';
import { PriceService } from '~/app/main/services/price/price.service';
import { itemsPrice } from '~/app/shared/const/item-price/items-price.const';
import { PriceFilterService } from '~/app/shared/services/price-filter.service';
import { UtilsService } from '~/app/shared/services/utils.service';
import { PriceSortFilters } from '~/app/shared/types/enum/price/price-sort-filters.enum';
import { PriceTransportFilters } from '~/app/shared/types/enum/price/price-transport-filter.enum';
import {
  ItemPrice,
  ItemPriceTrip,
} from '~/app/shared/types/items/item-price.type';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit {
  @ViewChild('calendar') calendar!: Calendar;

  searchForm!: FormGroup;

  priceSortFilters = PriceSortFilters;
  activeSortFilter: PriceSortFilters | null = null;

  priceTransportFilters = PriceTransportFilters;
  activeTransportFilter: PriceTransportFilters | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private utils: UtilsService,
    private filter: PriceFilterService,
    private priceService: PriceService
  ) {}

  public get departure(): FormControl {
    return this.searchForm.get('departure') as FormControl;
  }

  public get departureValue(): string {
    return this.searchForm.get('departure')?.value;
  }

  public get arrival(): FormControl {
    return this.searchForm.get('arrival') as FormControl;
  }

  public get arrivalValue(): string {
    return this.searchForm.get('arrival')?.value;
  }

  public get startDate(): FormControl {
    return this.searchForm.get('startDate') as FormControl;
  }

  public get startDateValue(): Date {
    return this.searchForm.get('startDate')?.value;
  }

  public get endDate(): FormControl {
    return this.searchForm.get('endDate') as FormControl;
  }

  public get searchItems(): ItemPrice[] {
    let filterItems = itemsPrice.map(day => {
      return {
        ...day,
        items: day.items.filter(
          item =>
            (this.utils.compareStrings(
              item.departureInfo.city,
              this.departureValue
            ) ||
              this.utils.compareStrings(
                item.departureInfo.country,
                this.departureValue
              )) &&
            (this.utils.compareStrings(
              item.arrivalInfo.city,
              this.arrivalValue
            ) ||
              this.utils.compareStrings(
                item.arrivalInfo.country,
                this.arrivalValue
              ))
        ),
      };
    });

    if (this.searchForm.get('startDate')?.value)
      filterItems = filterItems.filter(day =>
        this.filter.searchByDate(day.date, this.startDateValue)
      );

    return filterItems
      .map(day => {
        return {
          ...day,
          items: this.filter.searchByPriceFilters(
            day.items,
            this.activeSortFilter,
            this.activeTransportFilter
          ),
        };
      })
      .filter(day => day.items.length);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      departure: [''],
      arrival: [''],
      startDate: [''],
      endDate: [''],
    });
  }

  onClickItem(item: ItemPriceTrip): void {
    this.priceService.open(item);
  }

  onClickFilter(filter: PriceSortFilters | PriceTransportFilters): void {
    if (Object.values(PriceSortFilters).includes(filter as PriceSortFilters)) {
      this.activeSortFilter =
        this.activeSortFilter === filter ? null : (filter as PriceSortFilters);
    } else {
      this.activeTransportFilter =
        this.activeTransportFilter === filter
          ? null
          : (filter as PriceTransportFilters);
    }
  }
}
