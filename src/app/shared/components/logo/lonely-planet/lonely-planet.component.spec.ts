import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonelyPlanetComponent } from './lonely-planet.component';

describe('LonelyPlanetComponent', () => {
  let component: LonelyPlanetComponent;
  let fixture: ComponentFixture<LonelyPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LonelyPlanetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LonelyPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
