import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVeicoliComponent } from './lista-veicoli.component';

describe('ListaVeicoliComponent', () => {
  let component: ListaVeicoliComponent;
  let fixture: ComponentFixture<ListaVeicoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVeicoliComponent]
    });
    fixture = TestBed.createComponent(ListaVeicoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
