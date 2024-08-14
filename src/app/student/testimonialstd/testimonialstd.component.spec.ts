import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialstdComponent } from './testimonialstd.component';

describe('TestimonialstdComponent', () => {
  let component: TestimonialstdComponent;
  let fixture: ComponentFixture<TestimonialstdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialstdComponent]
    });
    fixture = TestBed.createComponent(TestimonialstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
