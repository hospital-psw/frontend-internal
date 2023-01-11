import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentBloodTransferStatisticsComponent } from './urgent-blood-transfer-statistics.component';

describe('UrgentBloodTransferStatisticsComponent', () => {
  let component: UrgentBloodTransferStatisticsComponent;
  let fixture: ComponentFixture<UrgentBloodTransferStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrgentBloodTransferStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrgentBloodTransferStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
