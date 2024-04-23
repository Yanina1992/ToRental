import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRevisioniComponent } from './edit-revisioni.component';

describe('EditRevisioniComponent', () => {
  let component: EditRevisioniComponent;
  let fixture: ComponentFixture<EditRevisioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRevisioniComponent]
    });
    fixture = TestBed.createComponent(EditRevisioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
