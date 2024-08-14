import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainernavbarComponent } from './trainernavbar.component';

describe('TrainernavbarComponent', () => {
  let component: TrainernavbarComponent;
  let fixture: ComponentFixture<TrainernavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainernavbarComponent]
    });
    fixture = TestBed.createComponent(TrainernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
