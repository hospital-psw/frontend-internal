import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocationsComponent } from './relocations.component';

describe('RelocationsComponent', () => {
  let component: RelocationsComponent;
  let fixture: ComponentFixture<RelocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
