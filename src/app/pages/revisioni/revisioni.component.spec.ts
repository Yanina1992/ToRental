import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisioniComponent } from './revisioni.component';

describe('RevisioniComponent', () => {
  let component: RevisioniComponent;
  let fixture: ComponentFixture<RevisioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevisioniComponent]
    });
    fixture = TestBed.createComponent(RevisioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
