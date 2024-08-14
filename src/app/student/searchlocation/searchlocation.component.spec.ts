import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlocationComponent } from './searchlocation.component';

describe('SearchlocationComponent', () => {
  let component: SearchlocationComponent;
  let fixture: ComponentFixture<SearchlocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchlocationComponent]
    });
    fixture = TestBed.createComponent(SearchlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
