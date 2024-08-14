import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestudentComponent } from './homestudent.component';

describe('HomestudentComponent', () => {
  let component: HomestudentComponent;
  let fixture: ComponentFixture<HomestudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomestudentComponent]
    });
    fixture = TestBed.createComponent(HomestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
