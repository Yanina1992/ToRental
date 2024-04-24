import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRevisioneComponent } from './details-revisione.component';

describe('DetailsRevisioneComponent', () => {
  let component: DetailsRevisioneComponent;
  let fixture: ComponentFixture<DetailsRevisioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsRevisioneComponent]
    });
    fixture = TestBed.createComponent(DetailsRevisioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
