import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsTabComponent } from './steps-tab.component';

describe('StepsTabComponent', () => {
  let component: StepsTabComponent;
  let fixture: ComponentFixture<StepsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
