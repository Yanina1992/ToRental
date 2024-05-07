import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenzioniComponent } from './manutenzioni.component';

describe('ManutenzioniComponent', () => {
  let component: ManutenzioniComponent;
  let fixture: ComponentFixture<ManutenzioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManutenzioniComponent]
    });
    fixture = TestBed.createComponent(ManutenzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
