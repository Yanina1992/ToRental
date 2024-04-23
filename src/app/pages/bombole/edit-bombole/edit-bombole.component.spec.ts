import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBomboleComponent } from './edit-bombole.component';

describe('EditBomboleComponent', () => {
  let component: EditBomboleComponent;
  let fixture: ComponentFixture<EditBomboleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBomboleComponent]
    });
    fixture = TestBed.createComponent(EditBomboleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
