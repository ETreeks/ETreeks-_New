import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecardstdComponent } from './coursecardstd.component';

describe('CoursecardstdComponent', () => {
  let component: CoursecardstdComponent;
  let fixture: ComponentFixture<CoursecardstdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursecardstdComponent]
    });
    fixture = TestBed.createComponent(CoursecardstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
