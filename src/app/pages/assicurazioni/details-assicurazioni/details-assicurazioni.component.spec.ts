import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAssicurazioniComponent } from './details-assicurazioni.component';

describe('DetailsAssicurazioniComponent', () => {
  let component: DetailsAssicurazioniComponent;
  let fixture: ComponentFixture<DetailsAssicurazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAssicurazioniComponent]
    });
    fixture = TestBed.createComponent(DetailsAssicurazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
