import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartrainerComponent } from './sidebartrainer.component';

describe('SidebartrainerComponent', () => {
  let component: SidebartrainerComponent;
  let fixture: ComponentFixture<SidebartrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebartrainerComponent]
    });
    fixture = TestBed.createComponent(SidebartrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
