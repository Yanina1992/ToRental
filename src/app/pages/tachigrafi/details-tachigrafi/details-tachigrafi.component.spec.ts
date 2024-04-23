import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTachigrafiComponent } from './details-tachigrafi.component';

describe('DetailsTachigrafiComponent', () => {
  let component: DetailsTachigrafiComponent;
  let fixture: ComponentFixture<DetailsTachigrafiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTachigrafiComponent]
    });
    fixture = TestBed.createComponent(DetailsTachigrafiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
