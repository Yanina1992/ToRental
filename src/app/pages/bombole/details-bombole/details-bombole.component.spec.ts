import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBomboleComponent } from './details-bombole.component';

describe('DetailsBomboleComponent', () => {
  let component: DetailsBomboleComponent;
  let fixture: ComponentFixture<DetailsBomboleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsBomboleComponent]
    });
    fixture = TestBed.createComponent(DetailsBomboleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
