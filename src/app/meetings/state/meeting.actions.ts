import { MeetingRoom } from '../meeting.room';

/* NgRx */
import { createAction, props } from '@ngrx/store';
import { Employee } from '../employee';
import { MeetingTime } from '../meeting.time';
import { MeetingSchedule } from '../meeting.schedule';

 
export const setCurrentMeetingRoom = createAction(
  '[Meeting] Set Current MeetingRoom',
  props<{ meetingRoom: MeetingRoom }>()
);

export const setCurrentMeetingTime = createAction(
  '[Meeting] Set Current MeetingTime',
  props<{ meetingTime: MeetingTime }>()
);

export const addSelectedMeetingSchedule = createAction(
  '[Meeting] Set New MeetingSchedule',
  props<{ meetingSchedule: MeetingSchedule }>()
);

 
export const setCurrentEmployee = createAction(
  '[Meeting] Set Current Employee',
  props<{ employee: Employee }>()
);

export const setCurrentDate = createAction(
  '[Meeting] Set Current Date',
  props<{ selectedDate: string }>()
);

export const clearCurrentMeetingRoom = createAction(
  '[Meeting] Clear Current MeetingRoom'
);

export const initializeCurrentMeetingRoom = createAction(
  '[Meeting] Initialize Current MeetingRoom'
);

export const loadMeetingRooms = createAction(
  '[Meeting] Load Rooms'
);

export const loadMeetingRoomSuccess = createAction(
  '[Meeting] Room Load Success',
  props<{ meetingRooms: MeetingRoom[] }>()
);

export const loadMeetingRoomsFailure = createAction(
  '[Meeting] Room Load Fail',
  props<{ error: string }>()
);
