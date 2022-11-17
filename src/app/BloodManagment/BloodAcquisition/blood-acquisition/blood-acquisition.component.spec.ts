import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAcquisitionComponent } from './blood-acquisition.component';

describe('BloodAcquisitionComponent', () => {
  let component: BloodAcquisitionComponent;
  let fixture: ComponentFixture<BloodAcquisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodAcquisitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
