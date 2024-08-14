import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseSessionComponent } from './create-course-session.component';

describe('CreateCourseSessionComponent', () => {
  let component: CreateCourseSessionComponent;
  let fixture: ComponentFixture<CreateCourseSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCourseSessionComponent]
    });
    fixture = TestBed.createComponent(CreateCourseSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
