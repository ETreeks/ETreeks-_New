import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrainercoursesComponent } from './viewtrainercourses.component';

describe('ViewtrainercoursesComponent', () => {
  let component: ViewtrainercoursesComponent;
  let fixture: ComponentFixture<ViewtrainercoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewtrainercoursesComponent]
    });
    fixture = TestBed.createComponent(ViewtrainercoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
