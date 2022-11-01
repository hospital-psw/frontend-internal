import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBuildingDetailsComponent } from './show-building-details.component';

describe('ShowBuildingDetailsComponent', () => {
  let component: ShowBuildingDetailsComponent;
  let fixture: ComponentFixture<ShowBuildingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBuildingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBuildingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
