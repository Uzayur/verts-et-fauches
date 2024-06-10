import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailsComponent } from '~/app/main/components/home/home-details/home-details/home-details.component';
import { HomeComponent } from '~/app/main/components/home/home.component';
import { LandingComponent } from '~/app/main/components/landing/landing.component';
import { LocationComponent } from '~/app/main/components/location/location.component';
import { ConfirmPaymentComponent } from '~/app/main/components/price/component/confirm-payment/confirm-payment.component';
import { PaymentComponent } from '~/app/main/components/price/component/payment/payment.component';
import { PriceComponent } from '~/app/main/components/price/price.component';
import { CarbonFootprintDetailsComponent } from '~/app/main/components/profile/components/carbon-footprint/carbon-footprint-details/carbon-footprint-details.component';
import { CarbonFootprintComponent } from '~/app/main/components/profile/components/carbon-footprint/carbon-footprint.component';
import { PartnersComponent } from '~/app/main/components/profile/components/partners/partners.component';
import { ProfileSettingsComponent } from '~/app/main/components/profile/components/profile-settings/profile-settings.component';
import { ProfileTravelsComponent } from '~/app/main/components/profile/components/profile-travels/profile-travels.component';
import { ProfileComponent } from '~/app/main/components/profile/profile.component';
import { LocationInformationComponent } from '~/app/main/components/location/components/location-information/location-information.component';
import { TravelDetailsComponent } from '~/app/main/components/travel/travel-details/travel-details.component';
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
    path: 'price/confirm-payment',
    component: ConfirmPaymentComponent,
  },

  {
    path: 'travel',
    component: TravelComponent,
  },
  {
    path: 'travel/details',
    component: TravelDetailsComponent,
  },

  {
    path: 'location',
    component: LocationComponent,
  },
  {
    path: 'location/info',
    component: LocationInformationComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'profile/settings',
    component: ProfileSettingsComponent,
  },
  {
    path: 'profile/travels',
    component: ProfileTravelsComponent,
  },

  {
    path: 'profile/carbon-footprint',
    component: CarbonFootprintComponent,
  },
  {
    path: 'profile/carbon-footprint/details',
    component: CarbonFootprintDetailsComponent,
  },

  {
    path: 'profile/partners',
    component: PartnersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
