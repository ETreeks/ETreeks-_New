import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTrainerEmailComponent } from './get-trainer-email.component';

describe('GetTrainerEmailComponent', () => {
  let component: GetTrainerEmailComponent;
  let fixture: ComponentFixture<GetTrainerEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTrainerEmailComponent]
    });
    fixture = TestBed.createComponent(GetTrainerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
