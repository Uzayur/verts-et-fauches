import { Component, Input } from '@angular/core';
import { DailyProgram } from '~/app/shared/types/items/travel/daily-program.type';

@Component({
  selector: 'app-daily-program',
  templateUrl: './daily-program.component.html',
  styleUrl: './daily-program.component.css',
})
export class DailyProgramComponent {
  @Input({ required: true }) initialData!: DailyProgram;

  constructor() {}

  onClickToBook(): void {
    console.log('book');
  }
}
