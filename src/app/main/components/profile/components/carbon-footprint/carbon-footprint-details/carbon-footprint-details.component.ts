import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { carbonFootprintProgram } from '~/app/shared/const/travel/carbon-footprint-program.const';

@Component({
  selector: 'app-carbon-footprint-details',
  templateUrl: './carbon-footprint-details.component.html',
  styleUrl: './carbon-footprint-details.component.css',
})
export class CarbonFootprintDetailsComponent {
  protected readonly carbonFootprintItem = carbonFootprintProgram;

  constructor(private router: Router) {}

  onClickBackArrow(): void {
    void this.router.navigate(['profile/carbon-footprint']);
  }
}
