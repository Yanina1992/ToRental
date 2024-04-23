import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssicurazioniComponent } from './assicurazioni.component';

describe('AssicurazioniComponent', () => {
  let component: AssicurazioniComponent;
  let fixture: ComponentFixture<AssicurazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssicurazioniComponent]
    });
    fixture = TestBed.createComponent(AssicurazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
