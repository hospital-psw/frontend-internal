import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSchedulingStatisticsComponent } from './patient-scheduling-statistics.component';

describe('PatientSchedulingStatisticsComponent', () => {
  let component: PatientSchedulingStatisticsComponent;
  let fixture: ComponentFixture<PatientSchedulingStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSchedulingStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSchedulingStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
