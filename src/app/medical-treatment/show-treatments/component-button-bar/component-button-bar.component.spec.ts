import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentButtonBarComponent } from './component-button-bar.component';

describe('ComponentButtonBarComponent', () => {
  let component: ComponentButtonBarComponent;
  let fixture: ComponentFixture<ComponentButtonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentButtonBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
