import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerscriptionsTabComponent } from './perscriptions-tab.component';

describe('PerscriptionsTabComponent', () => {
  let component: PerscriptionsTabComponent;
  let fixture: ComponentFixture<PerscriptionsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerscriptionsTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PerscriptionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
