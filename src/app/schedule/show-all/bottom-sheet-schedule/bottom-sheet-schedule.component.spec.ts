import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetScheduleComponent } from './bottom-sheet-schedule.component';

describe('BottomSheetScheduleComponent', () => {
  let component: BottomSheetScheduleComponent;
  let fixture: ComponentFixture<BottomSheetScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomSheetScheduleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomSheetScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
