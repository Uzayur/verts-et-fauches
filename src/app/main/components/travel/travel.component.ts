import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { itemTravelConst } from '~/app/shared/const/travel/item-travel.const';
import { UtilsService } from '~/app/shared/services/utils.service';
import { TravelTransportFilter } from '~/app/shared/types/enum/travel/travel-transport-filter.enum';
import { ItemTravel } from '~/app/shared/types/items/travel/item-travel.type';

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

  constructor(
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private router: Router
  ) {
    this.activeTransportFilter = [];
  }

  public get name(): FormControl {
    return this.searchForm.get('name') as FormControl;
  }

  public get nameValue(): string {
    return this.name.value;
  }

  public get duration(): FormControl {
    return this.searchForm.get('duration') as FormControl;
  }

  public get durationValue(): string {
    return this.duration.value;
  }

  public get durationType(): FormControl {
    return this.searchForm.get('durationType') as FormControl;
  }

  public get durationTypeValue(): string {
    return this.durationType.value;
  }

  get filteredItems(): ItemTravel[] {
    let items = [...itemTravelConst];

    if (this.durationTypeValue === 'Heures') return [];

    if (this.activeTransportFilter.length) {
      items = items.filter(item =>
        this.activeTransportFilter.every(transport =>
          item.transports.includes(transport)
        )
      );
    }

    if (this.carbonFootprintFilter)
      items.sort((a, b) => a.carbonFootprint - b.carbonFootprint);

    if (this.durationValue && this.durationTypeValue === 'Jours')
      items = items.filter(
        item => item.duration.toString() === this.durationValue
      );

    return items.filter(
      item =>
        this.utilsService.compareStrings(item.country, this.nameValue) ||
        item.city.some(city =>
          this.utilsService.compareStrings(city, this.nameValue)
        )
    );
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      name: [''],
      duration: [''],
      durationType: ['Jours'],
    });
  }

  onClickItem(): void {
    void this.router.navigate(['travel/details']);
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
