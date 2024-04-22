import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  isOpen$: Observable<boolean>;

  private isOpenSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    this.isOpen$ = this.isOpenSubject.asObservable();
  }

  open(): void {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  close(): void {
    this.isOpenSubject.next(false);
  }
}
