import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenzioniTableComponent } from './manutenzioni-table.component';

describe('ManutenzioniTableComponent', () => {
  let component: ManutenzioniTableComponent;
  let fixture: ComponentFixture<ManutenzioniTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManutenzioniTableComponent]
    });
    fixture = TestBed.createComponent(ManutenzioniTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
