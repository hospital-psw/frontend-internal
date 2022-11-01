import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoomDetailsComponent } from './show-room-details.component';

describe('ShowRoomDetailsComponent', () => {
  let component: ShowRoomDetailsComponent;
  let fixture: ComponentFixture<ShowRoomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRoomDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
