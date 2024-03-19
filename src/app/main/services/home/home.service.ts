import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
}
