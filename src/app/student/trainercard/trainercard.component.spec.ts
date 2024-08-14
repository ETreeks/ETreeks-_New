import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainercardComponent } from './trainercard.component';

describe('TrainercardComponent', () => {
  let component: TrainercardComponent;
  let fixture: ComponentFixture<TrainercardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainercardComponent]
    });
    fixture = TestBed.createComponent(TrainercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
