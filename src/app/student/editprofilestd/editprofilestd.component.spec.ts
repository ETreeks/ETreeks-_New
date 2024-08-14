import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilestdComponent } from './editprofilestd.component';

describe('EditprofilestdComponent', () => {
  let component: EditprofilestdComponent;
  let fixture: ComponentFixture<EditprofilestdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditprofilestdComponent]
    });
    fixture = TestBed.createComponent(EditprofilestdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
