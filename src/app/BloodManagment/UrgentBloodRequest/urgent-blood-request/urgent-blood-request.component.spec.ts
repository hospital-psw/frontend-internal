import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentBloodRequestComponent } from './urgent-blood-request.component';

describe('UrgentBloodRequestComponent', () => {
  let component: UrgentBloodRequestComponent;
  let fixture: ComponentFixture<UrgentBloodRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrgentBloodRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrgentBloodRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
