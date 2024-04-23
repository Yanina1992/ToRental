import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTagliandiComponent } from './edit-tagliandi.component';

describe('EditTagliandiComponent', () => {
  let component: EditTagliandiComponent;
  let fixture: ComponentFixture<EditTagliandiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTagliandiComponent]
    });
    fixture = TestBed.createComponent(EditTagliandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
