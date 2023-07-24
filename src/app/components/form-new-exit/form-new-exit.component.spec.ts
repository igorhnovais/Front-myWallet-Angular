import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewExitComponent } from './form-new-exit.component';

describe('FormNewExitComponent', () => {
  let component: FormNewExitComponent;
  let fixture: ComponentFixture<FormNewExitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNewExitComponent]
    });
    fixture = TestBed.createComponent(FormNewExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
