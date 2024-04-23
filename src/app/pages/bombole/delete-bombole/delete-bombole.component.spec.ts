import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBomboleComponent } from './delete-bombole.component';

describe('DeleteBomboleComponent', () => {
  let component: DeleteBomboleComponent;
  let fixture: ComponentFixture<DeleteBomboleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBomboleComponent]
    });
    fixture = TestBed.createComponent(DeleteBomboleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
