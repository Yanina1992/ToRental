import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRevisioneComponent } from './edit-revisione.component';

describe('EditRevisioneComponent', () => {
  let component: EditRevisioneComponent;
  let fixture: ComponentFixture<EditRevisioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRevisioneComponent]
    });
    fixture = TestBed.createComponent(EditRevisioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
