import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllVacationRequestsComponent } from './show-all-vacation-requests.component';

describe('AllComponent', () => {
  let component: ShowAllVacationRequestsComponent;
  let fixture: ComponentFixture<ShowAllVacationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllVacationRequestsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowAllVacationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
