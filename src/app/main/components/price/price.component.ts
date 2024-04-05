import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Calendar } from 'primeng/calendar';
import { itemsPrice } from '~/app/shared/const/item-price/items-price.const';
import { PriceFilterService } from '~/app/shared/services/filter/price-filter.service';
import { UtilsService } from '~/app/shared/services/utils/utils.service';
import { PriceHeaderFilters } from '~/app/shared/types/enum/price/price-header-filters.enum';
import { PriceSortFilter } from '~/app/shared/types/enum/price/price-sort-filters.enum';
import { PriceTransportFilter } from '~/app/shared/types/enum/price/price-transport-filter.enum';
import { ItemPrice } from '~/app/shared/types/items/item-price.type';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit {
  @ViewChild('calendar') calendar!: Calendar;

  searchForm!: FormGroup;

  priceHeaderFilters = PriceHeaderFilters;
  activeSortFilter: PriceSortFilter | null = null;
  activeTransportFilter: PriceTransportFilter | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private utils: UtilsService,
    private filter: PriceFilterService
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

  onClickItem(): void {
    // TODO: add modal open
  }

  onClickFilter(filter: PriceSortFilter | PriceTransportFilter): void {
    if (Object.values(PriceSortFilter).includes(filter as PriceSortFilter)) {
      this.activeSortFilter =
        this.activeSortFilter === filter ? null : (filter as PriceSortFilter);
    } else {
      this.activeTransportFilter =
        this.activeTransportFilter === filter
          ? null
          : (filter as PriceTransportFilter);
    }
  }
}
