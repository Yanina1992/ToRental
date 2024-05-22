import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandDetailsComponent } from './stand-details.component';

describe('StandDetailsComponent', () => {
  let component: StandDetailsComponent;
  let fixture: ComponentFixture<StandDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandDetailsComponent]
    });
    fixture = TestBed.createComponent(StandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
