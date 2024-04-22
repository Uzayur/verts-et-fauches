import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInformationComponent } from './travel-information.component';

describe('TravelInformationComponent', () => {
  let component: TravelInformationComponent;
  let fixture: ComponentFixture<TravelInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
