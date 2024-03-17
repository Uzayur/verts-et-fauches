import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { itemsInfo } from '~/app/shared/const/item-info.const';
import { UtilsService } from '~/app/shared/services/utils/utils.service';
import { ItemInfo } from '~/app/shared/types/items/item-info.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  searchForm!: FormGroup;

  itemsInfo = itemsInfo;

  constructor(
    private formBuilder: FormBuilder,
    private utils: UtilsService
  ) {}

  public get search(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }

  public get searchValue(): string {
    return this.searchForm.get('search')?.value;
  }

  get filteredItems(): ItemInfo[] {
    return this.itemsInfo.filter(
      item =>
        this.utils.compareStrings(item.city, this.searchValue) ||
        this.utils.compareStrings(item.country, this.searchValue)
    );
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }
}
