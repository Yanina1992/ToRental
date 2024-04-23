import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAssicurazioniComponent } from './delete-assicurazioni.component';

describe('DeleteAssicurazioniComponent', () => {
  let component: DeleteAssicurazioniComponent;
  let fixture: ComponentFixture<DeleteAssicurazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAssicurazioniComponent]
    });
    fixture = TestBed.createComponent(DeleteAssicurazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
