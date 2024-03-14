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
      size: 42,
    },
    {
      path: '/travel',
      icon: 'pi pi-briefcase',
      size: 50,
    },
    {
      path: '/',
      icon: 'pi pi-home',
      size: 45,
    },
    {
      path: '/location',
      icon: 'pi pi-map-marker',
      size: 47,
    },
    {
      path: '/profile',
      icon: 'pi pi-user',
      size: 49,
    },
  ];

  constructor(private router: Router) {}

  onItemClick(tab: FooterTab): void {
    void this.router.navigate([tab.path]);
  }

  isActiveTab(tab: FooterTab): boolean {
    const tabs = this.router.url.split('/').filter(tab => tab);

    return (
      tabs.some(route => {
        return route === tab.path.split('/').pop();
      }) ||
      (!tabs.pop() && !tab.path.split('/').pop())
    );
  }
}
