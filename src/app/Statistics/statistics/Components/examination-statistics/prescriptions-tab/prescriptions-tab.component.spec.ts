import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsTabComponent } from './prescriptions-tab.component';

describe('PrescriptionsTabComponent', () => {
  let component: PrescriptionsTabComponent;
  let fixture: ComponentFixture<PrescriptionsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
