import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprofileComponent } from './deleteprofile.component';

describe('DeleteprofileComponent', () => {
  let component: DeleteprofileComponent;
  let fixture: ComponentFixture<DeleteprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteprofileComponent]
    });
    fixture = TestBed.createComponent(DeleteprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
