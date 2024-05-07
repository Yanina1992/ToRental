import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenzioniEditComponent } from './manutenzioni-edit.component';

describe('ManutenzioniEditComponent', () => {
  let component: ManutenzioniEditComponent;
  let fixture: ComponentFixture<ManutenzioniEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManutenzioniEditComponent]
    });
    fixture = TestBed.createComponent(ManutenzioniEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
