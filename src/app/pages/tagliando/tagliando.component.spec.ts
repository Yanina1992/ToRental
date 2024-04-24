import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagliandoComponent } from './tagliando.component';

describe('TagliandoComponent', () => {
  let component: TagliandoComponent;
  let fixture: ComponentFixture<TagliandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagliandoComponent]
    });
    fixture = TestBed.createComponent(TagliandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
