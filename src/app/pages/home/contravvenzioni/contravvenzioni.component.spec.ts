import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContravvenzioniComponent } from './contravvenzioni.component';

describe('ContravvenzioniComponent', () => {
  let component: ContravvenzioniComponent;
  let fixture: ComponentFixture<ContravvenzioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContravvenzioniComponent]
    });
    fixture = TestBed.createComponent(ContravvenzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
