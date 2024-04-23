import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBolliComponent } from './delete-bolli.component';

describe('DeleteBolliComponent', () => {
  let component: DeleteBolliComponent;
  let fixture: ComponentFixture<DeleteBolliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBolliComponent]
    });
    fixture = TestBed.createComponent(DeleteBolliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
