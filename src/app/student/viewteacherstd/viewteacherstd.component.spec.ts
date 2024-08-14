import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteacherstdComponent } from './viewteacherstd.component';

describe('ViewteacherstdComponent', () => {
  let component: ViewteacherstdComponent;
  let fixture: ComponentFixture<ViewteacherstdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewteacherstdComponent]
    });
    fixture = TestBed.createComponent(ViewteacherstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
