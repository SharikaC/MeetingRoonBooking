import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { MeetingShellComponent } from './meeting-shell/meeting-shell.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
 
/* NgRx */
import { StoreModule } from '@ngrx/store';
import { meetingReducer } from './state/meeting.reducer';
import { MeetingEmployeeListComponent } from './meeting-employee-list/meeting-employee-list.component';
import { MeetingTimeComponent } from './meeting-time/meeting-time.component';
import { MeetingScheduleComponent } from './meeting-schedule/meeting-schedule.component';


 

const meetingRoutes: Routes = [
  { path: '', component: MeetingShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
     
    RouterModule.forChild(meetingRoutes),
    StoreModule.forFeature('meetingRooms', meetingReducer)
  ],
  declarations: [
    MeetingShellComponent,
    MeetingListComponent,
    MeetingEmployeeListComponent,
    MeetingTimeComponent,
    MeetingScheduleComponent,
  ]
})
export class MeetingRoomModule { }
