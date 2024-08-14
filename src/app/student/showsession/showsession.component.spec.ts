import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsessionComponent } from './showsession.component';

describe('ShowsessionComponent', () => {
  let component: ShowsessionComponent;
  let fixture: ComponentFixture<ShowsessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowsessionComponent]
    });
    fixture = TestBed.createComponent(ShowsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
