import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorystdComponent } from './historystd.component';

describe('HistorystdComponent', () => {
  let component: HistorystdComponent;
  let fixture: ComponentFixture<HistorystdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorystdComponent]
    });
    fixture = TestBed.createComponent(HistorystdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
