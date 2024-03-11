import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LocationComponent } from 'src/app/main/location/location.component';
import { PriceComponent } from './main/price/price.component';
import { TravelComponent } from './main/travel/travel.component';
import { ProfileComponent } from './main/profile/profile.component';
import { AppRoutingModule } from '~/app/app-routing.module';
import { AppComponent } from '~/app/app.component';
import { HomeComponent } from '~/app/main/home/home.component';
import { SharedModule } from '~/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    PriceComponent,
    TravelComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
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
