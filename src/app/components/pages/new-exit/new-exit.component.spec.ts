import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExitComponent } from './new-exit.component';

describe('NewExitComponent', () => {
  let component: NewExitComponent;
  let fixture: ComponentFixture<NewExitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewExitComponent]
    });
    fixture = TestBed.createComponent(NewExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
