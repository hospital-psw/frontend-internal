import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConsiliumsComponent } from './all-consiliums.component';

describe('AllConsiliumsComponent', () => {
  let component: AllConsiliumsComponent;
  let fixture: ComponentFixture<AllConsiliumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllConsiliumsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllConsiliumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
