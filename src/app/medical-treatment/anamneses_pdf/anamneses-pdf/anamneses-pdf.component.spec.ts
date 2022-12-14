import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamnesesPdfComponent } from './anamneses-pdf.component';

describe('AnamnesesPdfComponent', () => {
  let component: AnamnesesPdfComponent;
  let fixture: ComponentFixture<AnamnesesPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnamnesesPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnamnesesPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
