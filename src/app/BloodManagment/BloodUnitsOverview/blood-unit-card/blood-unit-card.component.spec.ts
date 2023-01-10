import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodUnitCardComponent } from './blood-unit-card.component';

describe('BloodUnitCardComponent', () => {
  let component: BloodUnitCardComponent;
  let fixture: ComponentFixture<BloodUnitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodUnitCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BloodUnitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
