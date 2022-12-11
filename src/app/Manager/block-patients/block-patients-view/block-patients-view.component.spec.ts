import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPatientsViewComponent } from './block-patients-view.component';

describe('BlockPatientsViewComponent', () => {
  let component: BlockPatientsViewComponent;
  let fixture: ComponentFixture<BlockPatientsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockPatientsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockPatientsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
