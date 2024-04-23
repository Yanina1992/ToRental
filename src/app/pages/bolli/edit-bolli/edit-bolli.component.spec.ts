import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBolliComponent } from './edit-bolli.component';

describe('EditBolliComponent', () => {
  let component: EditBolliComponent;
  let fixture: ComponentFixture<EditBolliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBolliComponent]
    });
    fixture = TestBed.createComponent(EditBolliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
