import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcategorystdComponent } from './viewcategorystd.component';

describe('ViewcategorystdComponent', () => {
  let component: ViewcategorystdComponent;
  let fixture: ComponentFixture<ViewcategorystdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcategorystdComponent]
    });
    fixture = TestBed.createComponent(ViewcategorystdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
