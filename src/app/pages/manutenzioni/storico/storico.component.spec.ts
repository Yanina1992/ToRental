import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoComponent } from './storico.component';

describe('StoricoComponent', () => {
  let component: StoricoComponent;
  let fixture: ComponentFixture<StoricoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoricoComponent]
    });
    fixture = TestBed.createComponent(StoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
