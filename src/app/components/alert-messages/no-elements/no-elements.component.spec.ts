import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoElementsComponent } from './no-elements.component';

describe('NoElementsComponent', () => {
  let component: NoElementsComponent;
  let fixture: ComponentFixture<NoElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoElementsComponent]
    });
    fixture = TestBed.createComponent(NoElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
