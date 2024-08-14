import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedcourseComponent } from './completedcourse.component';

describe('CompletedcourseComponent', () => {
  let component: CompletedcourseComponent;
  let fixture: ComponentFixture<CompletedcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedcourseComponent]
    });
    fixture = TestBed.createComponent(CompletedcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
