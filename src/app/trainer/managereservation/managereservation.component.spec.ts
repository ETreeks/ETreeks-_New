import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagereservationComponent } from './managereservation.component';

describe('ManagereservationComponent', () => {
  let component: ManagereservationComponent;
  let fixture: ComponentFixture<ManagereservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagereservationComponent]
    });
    fixture = TestBed.createComponent(ManagereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
