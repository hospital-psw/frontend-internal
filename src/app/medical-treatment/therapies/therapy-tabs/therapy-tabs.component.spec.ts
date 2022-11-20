import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyTabsComponent } from './therapy-tabs.component';

describe('TherapyTabsComponent', () => {
  let component: TherapyTabsComponent;
  let fixture: ComponentFixture<TherapyTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapyTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TherapyTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
