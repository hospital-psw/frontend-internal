import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleConsiliumComponent } from './schedule-consilium.component';

describe('ScheduleConsiliumComponent', () => {
  let component: ScheduleConsiliumComponent;
  let fixture: ComponentFixture<ScheduleConsiliumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleConsiliumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleConsiliumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
