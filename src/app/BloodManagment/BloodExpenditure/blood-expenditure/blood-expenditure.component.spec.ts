import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodExpenditureComponent } from './blood-expenditure.component';

describe('BloodExpenditureComponent', () => {
  let component: BloodExpenditureComponent;
  let fixture: ComponentFixture<BloodExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodExpenditureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
