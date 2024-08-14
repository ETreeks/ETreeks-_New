import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecategoriesComponent } from './managecategories.component';

describe('ManagecategoriesComponent', () => {
  let component: ManagecategoriesComponent;
  let fixture: ComponentFixture<ManagecategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagecategoriesComponent]
    });
    fixture = TestBed.createComponent(ManagecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
