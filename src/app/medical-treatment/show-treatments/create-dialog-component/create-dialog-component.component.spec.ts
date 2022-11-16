import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogComponentComponent } from './create-dialog-component.component';

describe('CreateDialogComponentComponent', () => {
  let component: CreateDialogComponentComponent;
  let fixture: ComponentFixture<CreateDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDialogComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
