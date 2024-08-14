import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesessionsComponent } from './managesessions.component';

describe('ManagesessionsComponent', () => {
  let component: ManagesessionsComponent;
  let fixture: ComponentFixture<ManagesessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagesessionsComponent]
    });
    fixture = TestBed.createComponent(ManagesessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
