import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentnavbarComponent } from './studentnavbar.component';

describe('StudentnavbarComponent', () => {
  let component: StudentnavbarComponent;
  let fixture: ComponentFixture<StudentnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentnavbarComponent]
    });
    fixture = TestBed.createComponent(StudentnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
