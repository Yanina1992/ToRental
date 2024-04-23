import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTachigrafiComponent } from './delete-tachigrafi.component';

describe('DeleteTachigrafiComponent', () => {
  let component: DeleteTachigrafiComponent;
  let fixture: ComponentFixture<DeleteTachigrafiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTachigrafiComponent]
    });
    fixture = TestBed.createComponent(DeleteTachigrafiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
