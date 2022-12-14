import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBlockedPatientsComponent } from './tab-blocked-patients.component';

describe('TabBlockedPatientsComponent', () => {
  let component: TabBlockedPatientsComponent;
  let fixture: ComponentFixture<TabBlockedPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabBlockedPatientsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabBlockedPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
