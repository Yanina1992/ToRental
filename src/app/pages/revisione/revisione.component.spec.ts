import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisioneComponent } from './revisione.component';

describe('RevisioneComponent', () => {
  let component: RevisioneComponent;
  let fixture: ComponentFixture<RevisioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevisioneComponent]
    });
    fixture = TestBed.createComponent(RevisioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
