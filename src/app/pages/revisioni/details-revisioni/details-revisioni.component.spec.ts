import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRevisioniComponent } from './details-revisioni.component';

describe('DetailsRevisioniComponent', () => {
  let component: DetailsRevisioniComponent;
  let fixture: ComponentFixture<DetailsRevisioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsRevisioniComponent]
    });
    fixture = TestBed.createComponent(DetailsRevisioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
