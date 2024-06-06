import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { itemTravelConst } from '~/app/shared/const/travel/item-travel.const';
import { TravelTransportFilter } from '~/app/shared/types/enum/travel/travel-transport-filter.enum';
import { ItemTravel } from '~/app/shared/types/items/item-travel.type';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css',
})
export class TravelComponent implements OnInit {
  searchForm!: FormGroup;

  carbonFootprintFilter: boolean = false;

  travelTransportFilters = TravelTransportFilter;
  activeTransportFilter: TravelTransportFilter[];

  constructor(private formBuilder: FormBuilder) {
    this.activeTransportFilter = [];
  }

  public get name(): FormControl {
    return this.searchForm.get('name') as FormControl;
  }

  public get duration(): FormControl {
    return this.searchForm.get('duration') as FormControl;
  }

  public get durationType(): FormControl {
    return this.searchForm.get('durationType') as FormControl;
  }

  get filteredItems(): ItemTravel[] {
    let items = [...itemTravelConst];

    if (this.activeTransportFilter.length) {
      items = items.filter(item =>
        this.activeTransportFilter.every(transport =>
          item.transports.includes(transport)
        )
      );
    }

    if (this.carbonFootprintFilter)
      items.sort((a, b) => b.carbonFootprint - a.carbonFootprint);

    return items;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      name: [''],
      duration: [''],
      durationType: [''],
    });
  }

  onClickFilter(filter: TravelTransportFilter): void {
    const index = this.activeTransportFilter.indexOf(filter);

    if (index > -1) this.activeTransportFilter.splice(index, 1);
    else this.activeTransportFilter.push(filter);
  }

  onClickSortFilter(): void {
    this.carbonFootprintFilter = !this.carbonFootprintFilter;
  }
}
