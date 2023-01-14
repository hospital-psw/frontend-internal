import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderOfferComponent } from './tender-offer.component';

describe('TenderOfferComponent', () => {
  let component: TenderOfferComponent;
  let fixture: ComponentFixture<TenderOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
