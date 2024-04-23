import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTagliandiComponent } from './delete-tagliandi.component';

describe('DeleteTagliandiComponent', () => {
  let component: DeleteTagliandiComponent;
  let fixture: ComponentFixture<DeleteTagliandiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTagliandiComponent]
    });
    fixture = TestBed.createComponent(DeleteTagliandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
