import { Component, Input } from '@angular/core';
import { TravelStatus } from '~/app/shared/types/enum/settings/travel-status.enum';
import {
  ProfileBasicActivity,
  ProfileDailyProgram,
} from '~/app/shared/types/items/profile/profile-daily-program.type';

@Component({
  selector: 'app-profile-daily-program',
  templateUrl: './profile-daily-program.component.html',
  styleUrl: './profile-daily-program.component.css',
})
export class ProfileDailyProgramComponent {
  @Input({ required: true }) initialData!: ProfileDailyProgram;

  protected readonly travelStatus = TravelStatus;

  onClickBasicActivity(
    activity: ProfileBasicActivity,
    travelStatus: TravelStatus
  ): void {
    this.initialData.basicActivities = this.initialData.basicActivities.map(
      item => {
        if (item.description === activity.description) {
          item.status =
            item.status === travelStatus ? TravelStatus.NONE : travelStatus;
        }

        return item;
      }
    );
  }

  onClickTransportActivity(travelStatus: TravelStatus): void {
    this.initialData.transportActivity.status =
      this.initialData.transportActivity.status === travelStatus
        ? TravelStatus.NONE
        : travelStatus;
  }
}
