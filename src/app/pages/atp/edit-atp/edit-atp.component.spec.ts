import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAtpComponent } from './edit-atp.component';

describe('EditAtpComponent', () => {
  let component: EditAtpComponent;
  let fixture: ComponentFixture<EditAtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAtpComponent]
    });
    fixture = TestBed.createComponent(EditAtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
