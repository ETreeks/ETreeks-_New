import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerequestComponent } from './lecturerequest.component';

describe('LecturerequestComponent', () => {
  let component: LecturerequestComponent;
  let fixture: ComponentFixture<LecturerequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LecturerequestComponent]
    });
    fixture = TestBed.createComponent(LecturerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
