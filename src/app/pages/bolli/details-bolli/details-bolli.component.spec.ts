import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBolliComponent } from './details-bolli.component';

describe('DetailsBolliComponent', () => {
  let component: DetailsBolliComponent;
  let fixture: ComponentFixture<DetailsBolliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsBolliComponent]
    });
    fixture = TestBed.createComponent(DetailsBolliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
