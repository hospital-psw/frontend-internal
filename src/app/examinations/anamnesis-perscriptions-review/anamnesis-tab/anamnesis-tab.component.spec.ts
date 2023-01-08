import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamnesisTabComponent } from './anamnesis-tab.component';

describe('AnamnesisTabComponent', () => {
  let component: AnamnesisTabComponent;
  let fixture: ComponentFixture<AnamnesisTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnamnesisTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnamnesisTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
