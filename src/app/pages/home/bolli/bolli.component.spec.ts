import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolliComponent } from './bolli.component';

describe('BolliComponent', () => {
  let component: BolliComponent;
  let fixture: ComponentFixture<BolliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BolliComponent]
    });
    fixture = TestBed.createComponent(BolliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
