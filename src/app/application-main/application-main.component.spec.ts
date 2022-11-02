import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMainComponent } from './application-main.component';

describe('ApplicationMainComponent', () => {
  let component: ApplicationMainComponent;
  let fixture: ComponentFixture<ApplicationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
