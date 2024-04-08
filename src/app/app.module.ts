import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeDetailsComponent } from './main/components/home/home-details/home-details/home-details.component';
import { PriceDetailsComponent } from './main/components/price/component/price-details/price-details.component';
import { PaymentComponent } from './main/components/price/component/payment/payment.component';
import { AppRoutingModule } from '~/app/app-routing.module';
import { AppComponent } from '~/app/app.component';
import { HomeComponent } from '~/app/main/components/home/home.component';
import { LandingComponent } from '~/app/main/components/landing/landing.component';
import { LocationComponent } from '~/app/main/components/location/location.component';
import { PriceComponent } from '~/app/main/components/price/price.component';
import { ProfileComponent } from '~/app/main/components/profile/profile.component';
import { TravelComponent } from '~/app/main/components/travel/travel.component';
import { SharedModule } from '~/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    PriceComponent,
    TravelComponent,
    ProfileComponent,
    LandingComponent,
    HomeDetailsComponent,
    PriceDetailsComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
