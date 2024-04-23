import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssicurazioniComponent } from './edit-assicurazioni.component';

describe('EditAssicurazioniComponent', () => {
  let component: EditAssicurazioniComponent;
  let fixture: ComponentFixture<EditAssicurazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAssicurazioniComponent]
    });
    fixture = TestBed.createComponent(EditAssicurazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
