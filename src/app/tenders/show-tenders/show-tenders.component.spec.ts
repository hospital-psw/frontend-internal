import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTendersComponent } from './show-tenders.component';

describe('ShowTendersComponent', () => {
  let component: ShowTendersComponent;
  let fixture: ComponentFixture<ShowTendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTendersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
