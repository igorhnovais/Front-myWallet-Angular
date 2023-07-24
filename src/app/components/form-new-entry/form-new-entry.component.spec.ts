import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewEntryComponent } from './form-new-entry.component';

describe('FormNewEntryComponent', () => {
  let component: FormNewEntryComponent;
  let fixture: ComponentFixture<FormNewEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNewEntryComponent]
    });
    fixture = TestBed.createComponent(FormNewEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
