import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { itemsInfo } from '~/app/shared/const/item-info/items-info.const';
import { ItemInfo } from '~/app/shared/types/items/item-info.type';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  searchHistory$: Observable<ItemInfo[]>;

  private searchHistory = new BehaviorSubject<ItemInfo[]>([]);

  constructor() {
    this.searchHistory$ = this.searchHistory.asObservable();
  }

  addItem(city: string): void {
    const newItem = itemsInfo.find(item => item.city === city);
    if (!newItem) return;

    let actualValue = this.searchHistory.value;
    actualValue = actualValue.filter(item => item.city !== city);
    actualValue.unshift(newItem);

    actualValue = actualValue.slice(0, 3);
    this.searchHistory.next(actualValue);
  }
}
