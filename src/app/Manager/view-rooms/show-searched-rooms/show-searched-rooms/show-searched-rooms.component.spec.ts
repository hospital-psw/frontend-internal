import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSearchedRoomsComponent } from './show-searched-rooms.component';

describe('ShowSearchedRoomsComponent', () => {
  let component: ShowSearchedRoomsComponent;
  let fixture: ComponentFixture<ShowSearchedRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowSearchedRoomsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowSearchedRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
