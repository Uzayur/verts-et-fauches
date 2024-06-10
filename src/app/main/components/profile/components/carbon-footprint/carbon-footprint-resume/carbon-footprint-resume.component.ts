import { Component } from '@angular/core';
import { carbonFootprintProgram } from '~/app/shared/const/travel/carbon-footprint-program.const';

@Component({
  selector: 'app-carbon-footprint-resume',
  templateUrl: './carbon-footprint-resume.component.html',
  styleUrl: './carbon-footprint-resume.component.css',
})
export class CarbonFootprintResumeComponent {
  protected readonly carbonFootprintItem = carbonFootprintProgram;
}
