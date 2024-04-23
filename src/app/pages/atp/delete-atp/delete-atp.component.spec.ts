import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAtpComponent } from './delete-atp.component';

describe('DeleteAtpComponent', () => {
  let component: DeleteAtpComponent;
  let fixture: ComponentFixture<DeleteAtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAtpComponent]
    });
    fixture = TestBed.createComponent(DeleteAtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
