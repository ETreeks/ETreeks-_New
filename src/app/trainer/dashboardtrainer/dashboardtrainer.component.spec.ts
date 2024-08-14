import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardtrainerComponent } from './dashboardtrainer.component';

describe('DashboardtrainerComponent', () => {
  let component: DashboardtrainerComponent;
  let fixture: ComponentFixture<DashboardtrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardtrainerComponent]
    });
    fixture = TestBed.createComponent(DashboardtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
