import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprofilestdComponent } from './deleteprofilestd.component';

describe('DeleteprofilestdComponent', () => {
  let component: DeleteprofilestdComponent;
  let fixture: ComponentFixture<DeleteprofilestdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteprofilestdComponent]
    });
    fixture = TestBed.createComponent(DeleteprofilestdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
