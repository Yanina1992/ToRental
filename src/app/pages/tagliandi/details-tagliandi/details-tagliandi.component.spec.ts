import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTagliandiComponent } from './details-tagliandi.component';

describe('DetailsTagliandiComponent', () => {
  let component: DetailsTagliandiComponent;
  let fixture: ComponentFixture<DetailsTagliandiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTagliandiComponent]
    });
    fixture = TestBed.createComponent(DetailsTagliandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
