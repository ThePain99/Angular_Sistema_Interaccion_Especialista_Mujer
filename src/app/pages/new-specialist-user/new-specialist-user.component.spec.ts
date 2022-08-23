import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpecialistUserComponent } from './new-specialist-user.component';

describe('NewSpecialistUserComponent', () => {
  let component: NewSpecialistUserComponent;
  let fixture: ComponentFixture<NewSpecialistUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSpecialistUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSpecialistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
