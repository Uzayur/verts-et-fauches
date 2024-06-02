import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { partners } from '~/app/shared/const/profile/partners.const';
import { Partner } from '~/app/shared/types/items/partner.type';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css',
})
export class PartnersComponent {
  partners: Partner[] = partners;

  constructor(private router: Router) {}

  onClickBackArrow(): void {
    void this.router.navigate(['/profile/settings']);
  }

  onClickWebsite(url: string): void {
    window.open(url);
  }
}
