import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofilestdComponent } from './viewprofilestd.component';

describe('ViewprofilestdComponent', () => {
  let component: ViewprofilestdComponent;
  let fixture: ComponentFixture<ViewprofilestdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewprofilestdComponent]
    });
    fixture = TestBed.createComponent(ViewprofilestdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
