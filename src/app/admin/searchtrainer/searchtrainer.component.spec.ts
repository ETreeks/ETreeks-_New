import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtrainerComponent } from './searchtrainer.component';

describe('SearchtrainerComponent', () => {
  let component: SearchtrainerComponent;
  let fixture: ComponentFixture<SearchtrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchtrainerComponent]
    });
    fixture = TestBed.createComponent(SearchtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
