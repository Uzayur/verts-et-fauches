import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { itemsInfo } from '~/app/shared/const/item-info/items-info.const';
import { ItemInfo } from '~/app/shared/types/items/item-info.type';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.css',
})
export class HomeDetailsComponent {
  item: ItemInfo | null;

  constructor(private route: ActivatedRoute) {
    this.item =
      itemsInfo.find(
        item => item.city === this.route.snapshot.params['city']
      ) ?? null;
  }
}
