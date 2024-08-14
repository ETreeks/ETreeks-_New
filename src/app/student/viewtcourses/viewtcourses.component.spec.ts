import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtcoursesComponent } from './viewtcourses.component';

describe('ViewtcoursesComponent', () => {
  let component: ViewtcoursesComponent;
  let fixture: ComponentFixture<ViewtcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewtcoursesComponent]
    });
    fixture = TestBed.createComponent(ViewtcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
