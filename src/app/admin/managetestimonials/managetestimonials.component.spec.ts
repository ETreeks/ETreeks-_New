import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetestimonialsComponent } from './managetestimonials.component';

describe('ManagetestimonialsComponent', () => {
  let component: ManagetestimonialsComponent;
  let fixture: ComponentFixture<ManagetestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagetestimonialsComponent]
    });
    fixture = TestBed.createComponent(ManagetestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
