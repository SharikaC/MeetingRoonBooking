import { MeetingRoom } from '../meeting.room';
import { Employee } from '../employee';

/* NgRx */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as MeetingActions from './meeting.actions';
import * as AppState from '../../state/app.state';
import { MeetingTime } from '../meeting.time';
import { MeetingSchedule } from '../meeting.schedule';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
    meetingRooms: MeetingRoomState;
}

// State for this feature (Product)
export interface MeetingRoomState {
  
  currentMeetingRoom: MeetingRoom;
  currentMeetingTime:MeetingTime;
  currentEmployee:Employee;
  meetingRooms: MeetingRoom[];
  employees:Employee[];
  meetingSchedules:MeetingSchedule[],
  currentDate:string
}

const initialState: MeetingRoomState = {
  
  currentMeetingRoom: null,
  currentMeetingTime:null,
  currentEmployee:null,
  meetingRooms: [],
  employees:[],
  meetingSchedules:[],
  currentDate:''
};

// Selector functions
const getMeetingRoomFeatureState = createFeatureSelector<MeetingRoomState>('meetingRooms');



export const getCurrentMeetingRoom = createSelector(
  getMeetingRoomFeatureState,
  state => state.currentMeetingRoom
);
 
export const getMeetingSchedules = createSelector(
  getMeetingRoomFeatureState,
  state => state.meetingSchedules
);

export const getCurrentMeetingTime = createSelector(
  getMeetingRoomFeatureState,
  state => state.currentMeetingTime
);
export const getCurrentEmployee = createSelector(
  getMeetingRoomFeatureState,
  state => state.currentEmployee
);

export const getCurrentDate = createSelector(
  getMeetingRoomFeatureState,
  state => state.currentDate
);

 
export const meetingReducer = createReducer<MeetingRoomState>(
  initialState,
   
  on(MeetingActions.setCurrentMeetingRoom, (state, action): MeetingRoomState => {
    return {
      ...state,
      currentMeetingRoom: action.meetingRoom
    };
  }),
  on(MeetingActions.setCurrentDate, (state, action): MeetingRoomState => {
    return {
      ...state,
      currentDate: action.selectedDate
    };
  }),
  on(MeetingActions.setCurrentMeetingTime, (state, action): MeetingRoomState => {
    return {
      ...state,
      currentMeetingTime: action.meetingTime
    };
  }),
  on(MeetingActions.setCurrentEmployee, (state, action): MeetingRoomState => {
    return {
      ...state,
      currentEmployee: action.employee
    };
  }),
  on(MeetingActions.clearCurrentMeetingRoom, (state): MeetingRoomState => {
    return {
      ...state,
      currentMeetingRoom: null
    };
  }),
  on(MeetingActions.addSelectedMeetingSchedule, (state,action): MeetingRoomState => {
    return {
      ...state,
      meetingSchedules: [...state.meetingSchedules,   action.meetingSchedule]
       
    };
  }),
  on(MeetingActions.initializeCurrentMeetingRoom, (state): MeetingRoomState => {
    return {
      ...state,
      currentMeetingRoom: {
        id: 0,
        meetingRoomName: '' 
      }
    };
  })
);
