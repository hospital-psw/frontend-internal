import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSpaceComponent } from './button-space.component';

describe('ButtonSpaceComponent', () => {
  let component: ButtonSpaceComponent;
  let fixture: ComponentFixture<ButtonSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
