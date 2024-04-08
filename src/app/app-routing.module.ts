import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailsComponent } from '~/app/main/components/home/home-details/home-details/home-details.component';
import { HomeComponent } from '~/app/main/components/home/home.component';
import { LandingComponent } from '~/app/main/components/landing/landing.component';
import { LocationComponent } from '~/app/main/components/location/location.component';
import { PaymentComponent } from '~/app/main/components/price/component/payment/payment.component';
import { PriceComponent } from '~/app/main/components/price/price.component';
import { ProfileComponent } from '~/app/main/components/profile/profile.component';
import { TravelComponent } from '~/app/main/components/travel/travel.component';

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
    path: 'home/:city',
    component: HomeDetailsComponent,
  },

  {
    path: 'price',
    component: PriceComponent,
  },
  {
    path: 'price/payment',
    component: PaymentComponent,
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
