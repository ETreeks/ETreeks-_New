import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereviewComponent } from './createreview.component';

describe('CreatereviewComponent', () => {
  let component: CreatereviewComponent;
  let fixture: ComponentFixture<CreatereviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatereviewComponent]
    });
    fixture = TestBed.createComponent(CreatereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
