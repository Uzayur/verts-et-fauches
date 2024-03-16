import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '~/app/main/home/home.component';
import { LandingComponent } from '~/app/main/landing/landing.component';
import { LocationComponent } from '~/app/main/location/location.component';
import { PriceComponent } from '~/app/main/price/price.component';
import { ProfileComponent } from '~/app/main/profile/profile.component';
import { TravelComponent } from '~/app/main/travel/travel.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'price',
    component: PriceComponent,
  },
  {
    path: 'travel',
    component: TravelComponent,
  },
  {
    path: 'location',
    component: LocationComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
