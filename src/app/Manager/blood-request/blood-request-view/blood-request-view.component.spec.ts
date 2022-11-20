import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRequestViewComponent } from './blood-request-view.component';

describe('BloodRequestViewComponent', () => {
  let component: BloodRequestViewComponent;
  let fixture: ComponentFixture<BloodRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodRequestViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BloodRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
