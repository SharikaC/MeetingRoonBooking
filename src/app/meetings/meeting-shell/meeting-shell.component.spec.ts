import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingShellComponent } from './meeting-shell.component';

describe('MeetingShellComponent', () => {
  let component: MeetingShellComponent;
  let fixture: ComponentFixture<MeetingShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
