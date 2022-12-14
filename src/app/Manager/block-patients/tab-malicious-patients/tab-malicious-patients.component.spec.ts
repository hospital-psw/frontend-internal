import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMaliciousPatientsComponent } from './tab-malicious-patients.component';

describe('TabMaliciousPatientsComponent', () => {
  let component: TabMaliciousPatientsComponent;
  let fixture: ComponentFixture<TabMaliciousPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabMaliciousPatientsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabMaliciousPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
