import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentViewComponent } from './treatment-view.component';

describe('TreatmentViewComponent', () => {
  let component: TreatmentViewComponent;
  let fixture: ComponentFixture<TreatmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
