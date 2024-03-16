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
      icon: 'pi pi-tag',
    },
    {
      path: '/travel',
      icon: 'pi pi-briefcase',
    },
    {
      path: '/home',
      icon: 'pi pi-home',
    },
    {
      path: '/location',
      icon: 'pi pi-map-marker',
    },
    {
      path: '/profile',
      icon: 'pi pi-user',
    },
  ];

  constructor(private router: Router) {}

  onItemClick(tab: FooterTab): void {
    void this.router.navigate([tab.path]);
  }

  isActiveTab(tab: FooterTab): boolean {
    const tabs = this.router.url.split('/').filter(tab => tab);

    return tabs.some(route => {
      return route === tab.path.split('/').pop();
    });
  }
}
