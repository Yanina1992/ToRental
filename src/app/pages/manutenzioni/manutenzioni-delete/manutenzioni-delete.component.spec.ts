import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenzioniDeleteComponent } from './manutenzioni-delete.component';

describe('ManutenzioniDeleteComponent', () => {
  let component: ManutenzioniDeleteComponent;
  let fixture: ComponentFixture<ManutenzioniDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManutenzioniDeleteComponent]
    });
    fixture = TestBed.createComponent(ManutenzioniDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
