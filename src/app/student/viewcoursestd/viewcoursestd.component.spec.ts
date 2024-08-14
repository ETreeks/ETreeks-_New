import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcoursestdComponent } from './viewcoursestd.component';

describe('ViewcoursestdComponent', () => {
  let component: ViewcoursestdComponent;
  let fixture: ComponentFixture<ViewcoursestdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcoursestdComponent]
    });
    fixture = TestBed.createComponent(ViewcoursestdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
