import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAdditionsOverviewComponent } from './blood-additions-overview.component';

describe('BloodAdditionsOverviewComponent', () => {
  let component: BloodAdditionsOverviewComponent;
  let fixture: ComponentFixture<BloodAdditionsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodAdditionsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodAdditionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
