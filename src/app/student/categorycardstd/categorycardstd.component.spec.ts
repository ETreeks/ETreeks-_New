import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorycardstdComponent } from './categorycardstd.component';

describe('CategorycardstdComponent', () => {
  let component: CategorycardstdComponent;
  let fixture: ComponentFixture<CategorycardstdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorycardstdComponent]
    });
    fixture = TestBed.createComponent(CategorycardstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
