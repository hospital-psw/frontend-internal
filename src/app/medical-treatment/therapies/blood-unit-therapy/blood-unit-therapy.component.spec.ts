import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodUnitTherapyComponent } from './blood-unit-therapy.component';

describe('BloodUnitTherapyComponent', () => {
  let component: BloodUnitTherapyComponent;
  let fixture: ComponentFixture<BloodUnitTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodUnitTherapyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodUnitTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
