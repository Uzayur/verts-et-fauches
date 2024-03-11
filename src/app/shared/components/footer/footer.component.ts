import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterTab } from '~/app/shared/types/navigation/footer-tab.type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerTabs: FooterTab[] = [
    {
      path: '/price',
      icon: 'price',
      size: 42,
    },
    {
      path: '/travel',
      icon: 'travel',
      size: 50,
    },
    {
      path: '/',
      icon: 'home',
      size: 45,
    },
    {
      path: '/location',
      icon: 'location',
      size: 47,
    },
    {
      path: '/profile',
      icon: 'profile',
      size: 49,
    },
  ];

  constructor(private router: Router) {}

  onItemClick(tab: FooterTab): void {
    void this.router.navigate([tab.path]);
  }
}
