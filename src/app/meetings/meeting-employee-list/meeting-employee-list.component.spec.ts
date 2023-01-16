import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingEmployeeListComponent } from './meeting-employee-list.component';

describe('MeetingEmployeeListComponent', () => {
  let component: MeetingEmployeeListComponent;
  let fixture: ComponentFixture<MeetingEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
