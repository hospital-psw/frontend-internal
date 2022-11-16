import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTabComponentComponent } from './second-tab-component.component';

describe('SecondTabComponentComponent', () => {
  let component: SecondTabComponentComponent;
  let fixture: ComponentFixture<SecondTabComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondTabComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
