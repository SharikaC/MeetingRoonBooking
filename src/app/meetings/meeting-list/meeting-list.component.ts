import { Component, OnInit } from '@angular/core';

import { MeetingRoom } from '../meeting.room';
import { MeetingRoomService } from '../meeting.room.service';

/* NgRx */
import { Store } from '@ngrx/store';
import { State,  getCurrentMeetingRoom } from '../state/meeting.reducer';
import * as MeetingActions from '../state/meeting.actions';

@Component({
  selector: 'pm-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {
  pageTitle = 'Select a meeting room';
  errorMessage: string;

  displayCode: boolean;

  meetingRooms: MeetingRoom[];

  // Used to highlight the selected employee in the list
  selectedMeetingRoom: MeetingRoom | null;

  constructor(private store: Store<State>, private meetingRoomService: MeetingRoomService) { }

  ngOnInit(): void {
    // TODO: Unsubscribe
    this.store.select(getCurrentMeetingRoom).subscribe(
      currentMeetingRoom => this.selectedMeetingRoom= currentMeetingRoom
    );

    this.meetingRoomService.getMeetingRooms().subscribe({
      next: (meetingRooms: MeetingRoom[]) => this.meetingRooms = meetingRooms,
      error: err => this.errorMessage = err
    });

     
  }   

  meetingRoomSelected(meetingRoom: MeetingRoom): void {
    this.store.dispatch(MeetingActions.setCurrentMeetingRoom({ meetingRoom }));
  }

}


 
