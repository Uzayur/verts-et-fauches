import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenInputComponent } from './green-input.component';

describe('GreenInputComponent', () => {
  let component: GreenInputComponent;
  let fixture: ComponentFixture<GreenInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreenInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
