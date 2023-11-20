import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMovesComponent } from './all-moves.component';

describe('AllMovesComponent', () => {
  let component: AllMovesComponent;
  let fixture: ComponentFixture<AllMovesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMovesComponent]
    });
    fixture = TestBed.createComponent(AllMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
