import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemInfo } from '~/app/shared/types/items/item-info.type';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private searchHistory = new BehaviorSubject<ItemInfo[]>([]);

  constructor() {}
}
