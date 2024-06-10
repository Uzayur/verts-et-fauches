import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { profileDailyProgram } from '~/app/shared/const/profile/profile-daily.program';
import { SettingsFilter } from '~/app/shared/types/enum/settings/settings-filter.enum';

@Component({
  selector: 'app-profile-travels',
  templateUrl: './profile-travels.component.html',
  styleUrl: './profile-travels.component.css',
})
export class ProfileTravelsComponent implements OnInit {
  searchForm!: FormGroup;

  activeFilter: SettingsFilter | null = SettingsFilter.IN_PROGRESS;

  tabs = [
    { title: 'Jour 1', index: 0 },
    { title: 'Jour 2', index: 1 },
    { title: 'Jour 3', index: 2 },
    { title: 'Jour 4', index: 3 },
  ];

  protected readonly settingsFilter = SettingsFilter;
  protected readonly profileDailyPrograms = profileDailyProgram;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  public get name(): FormControl {
    return this.searchForm.get('name') as FormControl;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      name: [''],
    });
  }

  onClickBackArrow(): void {
    void this.router.navigate(['/profile/settings']);
  }

  onClickFilter(filter: SettingsFilter): void {
    this.activeFilter = filter;

    console.log(this.activeFilter);
  }
}
