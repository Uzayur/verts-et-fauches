import { Component } from '@angular/core';
import { carbonFootprintProgram } from '~/app/shared/const/travel/carbon-footprint-program.const';

@Component({
  selector: 'app-carbon-footprint-daily-program',
  templateUrl: './carbon-footprint-daily-program.component.html',
  styleUrl: './carbon-footprint-daily-program.component.css',
})
export class CarbonFootprintDailyProgramComponent {
  protected readonly carbonFootprintItem = carbonFootprintProgram;
}
