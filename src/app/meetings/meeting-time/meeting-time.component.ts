 
import { Component, OnInit } from '@angular/core';

import { MeetingTime } from '../meeting.time';
import { MeetingTimeService } from '../meeting.time.service';

/* NgRx */
import { Store } from '@ngrx/store';
import { State,  getCurrentMeetingTime, getCurrentMeetingRoom, getCurrentEmployee, getCurrentDate, getMeetingSchedules } from '../state/meeting.reducer';
import * as MeetingActions from '../state/meeting.actions';
import { MeetingSchedule } from '../meeting.schedule';
import { MeetingRoom } from '../meeting.room';
import { Employee } from '../employee';
@Component({
  selector: 'pm-meeting-time',
  templateUrl: './meeting-time.component.html',
  styleUrls: ['./meeting-time.component.css']
})
export class MeetingTimeComponent implements OnInit {

  pageTitle = 'Select a Time Slot';
  errorMessage: string;

  displayCode: boolean;

  meetingTimes: MeetingTime[];
  morningTimes:MeetingTime[];
  // Used to highlight the selected employee in the list
  selectedMeetingTime: MeetingTime | null;
  selectedMeetingRoom: MeetingRoom | null;
  selectedEmployee: Employee | null;
  selectedDate: string | null;
  meetingSchedule:MeetingSchedule;
  scheduleMessage:string='';
  meetingSchedules:MeetingSchedule[]=null;
  constructor(private store: Store<State>, private meetingTimeService: MeetingTimeService) { }

  ngOnInit(): void {

    // TODO: Unsubscribe
   
   
    this.meetingTimeService.getMeetingTimes().subscribe({
      next: (meetingTimes: MeetingTime[]) => this.meetingTimes = meetingTimes,
      error: err => this.errorMessage = err
    });

    this.store.select(getCurrentMeetingTime).subscribe(
      currentMeetingTime => this.selectedMeetingTime= currentMeetingTime
       
    );
    this.store.select(getCurrentMeetingRoom).subscribe(
      currentMeetingRoom => this.selectedMeetingRoom= currentMeetingRoom
    );
    this.store.select(getCurrentEmployee).subscribe(
      currentEmployee => this.selectedEmployee= currentEmployee
    );

    this.store.select(getCurrentDate).subscribe(
      currentDate => this.selectedDate= currentDate
    );
    this.store.select(getMeetingSchedules).subscribe(
      meetingSchedules => this.meetingSchedules= meetingSchedules
    );

  }

  meetingTimeSelected(meetingTime: MeetingTime): void {
    
    this.store.dispatch(MeetingActions.setCurrentMeetingTime({ meetingTime }));
  }
  saveSchedule():void{
     const meetingSchedule:MeetingSchedule=
     {
        currentMeetingTime:this.selectedMeetingTime,
        currentEmployee:this.selectedEmployee,
        currentMeetingRoom:this.selectedMeetingRoom,
        DatePart:this.selectedDate
     };
     console.log(meetingSchedule);
    if(meetingSchedule.currentEmployee==null)
    {
      this.errorMessage="Please select an employee";
      return;
    }
    if(meetingSchedule.currentMeetingRoom==null)
    {
      this.errorMessage="Please select a meeting room";
      return;
    }
    
    if(meetingSchedule.DatePart===null || this.selectedDate==='')
    {
      this.errorMessage="Please select a date";
      return;
    }
    if(meetingSchedule.currentMeetingTime==null)
    {
      this.errorMessage="Please select a time slot";
      return;
    }
    const first = this.meetingSchedules.find((obj) => {
      return (
        obj.DatePart === this.selectedDate &&
        obj.currentMeetingTime.timePart===this.selectedMeetingTime.timePart &&
        obj.currentMeetingRoom.meetingRoomName===this.selectedMeetingRoom.meetingRoomName
        
        );
    });
    if(first)
    {
      this.errorMessage="Slot not available! Date and Time already booked.";
      return;
    }
      this.store.dispatch(MeetingActions.addSelectedMeetingSchedule({ meetingSchedule }));
      this.scheduleMessage="Meeting Schedule saved successfully."
      this.errorMessage='';
}

clearAll():void{
  this.scheduleMessage='';
  this.errorMessage='';
  const meetingTime=null;
  const meetingRoom=null;
  const employee=null;
  const selectedDate=null;
  
  this.store.dispatch(MeetingActions.setCurrentMeetingTime({ meetingTime }));
  this.store.dispatch(MeetingActions.setCurrentMeetingRoom({ meetingRoom }));
  this.store.dispatch(MeetingActions.setCurrentEmployee({ employee }));
  this.store.dispatch(MeetingActions.setCurrentDate({ selectedDate }));
}
closeAlert():void{
  this.scheduleMessage='';
  this.errorMessage='';
}
}
