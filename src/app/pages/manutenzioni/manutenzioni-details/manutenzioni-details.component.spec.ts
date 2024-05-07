import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenzioniDetailsComponent } from './manutenzioni-details.component';

describe('ManutenzioniDetailsComponent', () => {
  let component: ManutenzioniDetailsComponent;
  let fixture: ComponentFixture<ManutenzioniDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManutenzioniDetailsComponent]
    });
    fixture = TestBed.createComponent(ManutenzioniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
