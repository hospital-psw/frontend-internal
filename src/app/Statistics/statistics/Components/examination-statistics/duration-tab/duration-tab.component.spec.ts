import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationTabComponent } from './duration-tab.component';

describe('DurationTabComponent', () => {
  let component: DurationTabComponent;
  let fixture: ComponentFixture<DurationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
