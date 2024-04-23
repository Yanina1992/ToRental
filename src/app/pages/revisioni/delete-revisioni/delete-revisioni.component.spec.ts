import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRevisioniComponent } from './delete-revisioni.component';

describe('DeleteRevisioniComponent', () => {
  let component: DeleteRevisioniComponent;
  let fixture: ComponentFixture<DeleteRevisioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteRevisioniComponent]
    });
    fixture = TestBed.createComponent(DeleteRevisioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
