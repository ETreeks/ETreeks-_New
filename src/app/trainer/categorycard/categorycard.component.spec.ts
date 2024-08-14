import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorycardComponent } from './categorycard.component';

describe('CategorycardComponent', () => {
  let component: CategorycardComponent;
  let fixture: ComponentFixture<CategorycardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorycardComponent]
    });
    fixture = TestBed.createComponent(CategorycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
