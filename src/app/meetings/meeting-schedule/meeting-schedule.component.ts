import { Component, OnInit } from '@angular/core';

import { MeetingRoom } from '../meeting.room';
import { MeetingRoomService } from '../meeting.room.service';

/* NgRx */
import { Store } from '@ngrx/store';
import { State,  getCurrentMeetingRoom, getMeetingSchedules } from '../state/meeting.reducer';
import * as MeetingActions from '../state/meeting.actions';
import { MeetingSchedule } from '../meeting.schedule';
 
@Component({
  selector: 'pm-meeting-schedule',
  templateUrl: './meeting-schedule.component.html',
  styleUrls: ['./meeting-schedule.component.css']
})
export class MeetingScheduleComponent implements OnInit {

  constructor(private store: Store<State>, private meetingRoomService: MeetingRoomService) { }
    meetingSchedules:MeetingSchedule[]=null;
    displayedColumns: string[] = ['Meeting Room','Employee', 'Date', 'Time'];
    pageTitle=" Saved Meeting Schedules"
  ngOnInit(): void {
    this.store.select(getMeetingSchedules).subscribe(
      meetingSchedules => this.meetingSchedules= meetingSchedules
    );

  }

}
