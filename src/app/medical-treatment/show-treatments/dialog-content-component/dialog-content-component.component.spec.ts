import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentComponentComponent } from './dialog-content-component.component';

describe('DialogContentComponentComponent', () => {
  let component: DialogContentComponentComponent;
  let fixture: ComponentFixture<DialogContentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
