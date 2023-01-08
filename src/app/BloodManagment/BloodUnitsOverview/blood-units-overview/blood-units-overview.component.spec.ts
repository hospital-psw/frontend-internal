import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodUnitsOverviewComponent } from './blood-units-overview.component';

describe('BloodUnitsOverviewComponent', () => {
  let component: BloodUnitsOverviewComponent;
  let fixture: ComponentFixture<BloodUnitsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodUnitsOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BloodUnitsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
