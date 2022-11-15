import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTreatmentBaseComponent } from './create-treatment-base.component';

describe('CreateTreatmentBaseComponent', () => {
  let component: CreateTreatmentBaseComponent;
  let fixture: ComponentFixture<CreateTreatmentBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTreatmentBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTreatmentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
