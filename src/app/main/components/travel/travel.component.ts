import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TravelService } from '~/app/main/services/travel/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css',
})
export class TravelComponent implements OnInit {
  travelForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private travelService: TravelService
  ) {}

  public get search(): FormControl {
    return this.travelForm.get('search') as FormControl;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.travelForm = this.formBuilder.group({
      search: [''],
    });
  }

  onClickMap(): void {
    this.travelService.open();
  }
}
