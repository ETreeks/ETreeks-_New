import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStudentComponent } from './map-student.component';

describe('MapStudentComponent', () => {
  let component: MapStudentComponent;
  let fixture: ComponentFixture<MapStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapStudentComponent]
    });
    fixture = TestBed.createComponent(MapStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
