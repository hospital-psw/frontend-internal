import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTherapyDialogComponent } from './new-therapy-dialog.component';

describe('NewTherapyDialogComponent', () => {
  let component: NewTherapyDialogComponent;
  let fixture: ComponentFixture<NewTherapyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTherapyDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTherapyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
