import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachigrafiComponent } from './tachigrafi.component';

describe('TachigrafiComponent', () => {
  let component: TachigrafiComponent;
  let fixture: ComponentFixture<TachigrafiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TachigrafiComponent]
    });
    fixture = TestBed.createComponent(TachigrafiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
