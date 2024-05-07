import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManutenzioneComponent } from './create-manutenzione.component';

describe('CreateManutenzioneComponent', () => {
  let component: CreateManutenzioneComponent;
  let fixture: ComponentFixture<CreateManutenzioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateManutenzioneComponent]
    });
    fixture = TestBed.createComponent(CreateManutenzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
