import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTabComponentComponent } from './first-tab-component.component';

describe('FirstTabComponentComponent', () => {
  let component: FirstTabComponentComponent;
  let fixture: ComponentFixture<FirstTabComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstTabComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
