import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsessioncourseComponent } from './searchsessioncourse.component';

describe('SearchsessioncourseComponent', () => {
  let component: SearchsessioncourseComponent;
  let fixture: ComponentFixture<SearchsessioncourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchsessioncourseComponent]
    });
    fixture = TestBed.createComponent(SearchsessioncourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
