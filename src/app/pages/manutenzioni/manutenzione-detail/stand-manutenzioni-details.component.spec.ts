import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandManutenzioniDetailsComponent } from './stand-manutenzioni-details.component';

describe('StandManutenzioniDetailsComponent', () => {
  let component: StandManutenzioniDetailsComponent;
  let fixture: ComponentFixture<StandManutenzioniDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandManutenzioniDetailsComponent]
    });
    fixture = TestBed.createComponent(StandManutenzioniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
