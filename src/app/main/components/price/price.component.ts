import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit {
  @ViewChild('calendar') calendar!: Calendar;

  searchForm!: FormGroup;

  test = false;
  constructor(private formBuilder: FormBuilder) {}

  public get departure(): FormControl {
    return this.searchForm.get('departure') as FormControl;
  }

  public get arrival(): FormControl {
    return this.searchForm.get('arrival') as FormControl;
  }

  public get startDate(): FormControl {
    return this.searchForm.get('startDate') as FormControl;
  }

  public get startDateValue(): Date {
    return this.searchForm.get('startDate')?.value;
  }

  public get endDate(): FormControl {
    return this.searchForm.get('endDate') as FormControl;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      departure: [''],
      arrival: [''],
      startDate: [''],
      endDate: [''],
    });
  }
}
