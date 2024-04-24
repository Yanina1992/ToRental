import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachigrafoComponent } from './tachigrafo.component';

describe('TachigrafoComponent', () => {
  let component: TachigrafoComponent;
  let fixture: ComponentFixture<TachigrafoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TachigrafoComponent]
    });
    fixture = TestBed.createComponent(TachigrafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
