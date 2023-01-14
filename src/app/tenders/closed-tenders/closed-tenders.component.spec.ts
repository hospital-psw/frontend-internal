import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedTendersComponent } from './closed-tenders.component';

describe('ClosedTendersComponent', () => {
  let component: ClosedTendersComponent;
  let fixture: ComponentFixture<ClosedTendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClosedTendersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClosedTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
