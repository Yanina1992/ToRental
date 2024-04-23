import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAtpComponent } from './details-atp.component';

describe('DetailsAtpComponent', () => {
  let component: DetailsAtpComponent;
  let fixture: ComponentFixture<DetailsAtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAtpComponent]
    });
    fixture = TestBed.createComponent(DetailsAtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
