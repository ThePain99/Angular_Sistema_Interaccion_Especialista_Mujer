import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminUserComponent } from './new-admin-user.component';

describe('NewAdminUserComponent', () => {
  let component: NewAdminUserComponent;
  let fixture: ComponentFixture<NewAdminUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdminUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
