import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdatesComponent } from './searchdates.component';

describe('SearchdatesComponent', () => {
  let component: SearchdatesComponent;
  let fixture: ComponentFixture<SearchdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchdatesComponent]
    });
    fixture = TestBed.createComponent(SearchdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
