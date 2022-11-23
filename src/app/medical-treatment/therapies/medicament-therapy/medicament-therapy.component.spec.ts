import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentTherapyComponent } from './medicament-therapy.component';

describe('MedicamentTherapyComponent', () => {
  let component: MedicamentTherapyComponent;
  let fixture: ComponentFixture<MedicamentTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicamentTherapyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MedicamentTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
