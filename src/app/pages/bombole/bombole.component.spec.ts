import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomboleComponent } from './bombole.component';

describe('BomboleComponent', () => {
  let component: BomboleComponent;
  let fixture: ComponentFixture<BomboleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomboleComponent]
    });
    fixture = TestBed.createComponent(BomboleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
