import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometrainerComponent } from './hometrainer.component';

describe('HometrainerComponent', () => {
  let component: HometrainerComponent;
  let fixture: ComponentFixture<HometrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HometrainerComponent]
    });
    fixture = TestBed.createComponent(HometrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
