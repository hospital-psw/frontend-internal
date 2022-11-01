import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFloorDetailsComponent } from './show-floor-details.component';

describe('ShowFloorDetailsComponent', () => {
  let component: ShowFloorDetailsComponent;
  let fixture: ComponentFixture<ShowFloorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowFloorDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowFloorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
