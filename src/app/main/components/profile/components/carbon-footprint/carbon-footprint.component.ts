import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { itemCarbonFootprint } from '~/app/shared/const/profile/item-carbon-footprint.const';
import { UtilsService } from '~/app/shared/services/utils.service';
import { TravelTransportFilter } from '~/app/shared/types/enum/travel/travel-transport-filter.enum';
import { ItemPriceTrip } from '~/app/shared/types/items/item-price.type';
import { ItemCarbonFootprint } from '~/app/shared/types/items/profile/item-carbon-footprint.type';
import { ItemTravel } from '~/app/shared/types/items/travel/item-travel.type';

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css',
})
export class CarbonFootprintComponent implements OnInit {
  searchForm!: FormGroup;

  carbonFootprintFilter: boolean = false;

  protected readonly travelTransportFilters = TravelTransportFilter;
  protected readonly activeTransportFilter: TravelTransportFilter[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private utilsService: UtilsService
  ) {
    this.activeTransportFilter = [];
  }

  public get name(): FormControl {
    return this.searchForm.get('name') as FormControl;
  }

  public get nameValue(): string {
    return this.name.value;
  }

  public get filteredItems(): ItemCarbonFootprint[] {
    let items = [...itemCarbonFootprint];

    if (this.activeTransportFilter.length) {
      items = items.filter(item => {
        if (this.isTravelItem(item)) {
          return this.activeTransportFilter.every(transport =>
            item.transports.includes(transport)
          );
        } else {
          return (
            this.activeTransportFilter.length === 1 &&
            item.transport === (this.activeTransportFilter[0] as string)
          );
        }
      });
    }

    if (this.carbonFootprintFilter)
      items.sort((a, b) => a.carbonFootprint - b.carbonFootprint);

    return items.filter(item => {
      if (this.isTravelItem(item)) {
        return (
          this.utilsService.compareStrings(item.country, this.nameValue) ||
          item.city.some(city =>
            this.utilsService.compareStrings(city, this.nameValue)
          )
        );
      } else {
        return (
          this.utilsService.compareStrings(
            item.departureInfo.city,
            this.nameValue
          ) ||
          this.utilsService.compareStrings(
            item.departureInfo.country,
            this.nameValue
          ) ||
          this.utilsService.compareStrings(
            item.arrivalInfo.city,
            this.nameValue
          ) ||
          this.utilsService.compareStrings(
            item.arrivalInfo.country,
            this.nameValue
          )
        );
      }
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      name: [''],
    });
  }

  onClickBackArrow(): void {
    void this.router.navigate(['/profile']);
  }

  onClickFilter(filter: TravelTransportFilter): void {
    const index = this.activeTransportFilter.indexOf(filter);

    if (index > -1) this.activeTransportFilter.splice(index, 1);
    else this.activeTransportFilter.push(filter);
  }

  onClickSortFilter(): void {
    this.carbonFootprintFilter = !this.carbonFootprintFilter;
  }

  isTravelItem(item: ItemCarbonFootprint): item is ItemTravel {
    return (item as ItemTravel).carbonFootprintSaved !== undefined;
  }

  isPriceTripItem(item: ItemCarbonFootprint): item is ItemPriceTrip {
    return (item as ItemPriceTrip).departureInfo !== undefined;
  }

  onClickPriceTripItem(item: ItemPriceTrip): void {
    console.log('PriceTripItem');
  }

  onClickTravelItem(): void {
    void this.router.navigate(['/profile/carbon-footprint/details']);
  }
}
