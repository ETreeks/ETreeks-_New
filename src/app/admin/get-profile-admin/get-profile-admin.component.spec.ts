import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProfileAdminComponent } from './get-profile-admin.component';

describe('GetProfileAdminComponent', () => {
  let component: GetProfileAdminComponent;
  let fixture: ComponentFixture<GetProfileAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetProfileAdminComponent]
    });
    fixture = TestBed.createComponent(GetProfileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
