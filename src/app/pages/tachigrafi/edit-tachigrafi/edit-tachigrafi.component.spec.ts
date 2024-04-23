import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTachigrafiComponent } from './edit-tachigrafi.component';

describe('EditTachigrafiComponent', () => {
  let component: EditTachigrafiComponent;
  let fixture: ComponentFixture<EditTachigrafiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTachigrafiComponent]
    });
    fixture = TestBed.createComponent(EditTachigrafiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
