import { Employee } from "./employee";
import { MeetingRoom } from "./meeting.room";
import { MeetingTime } from "./meeting.time";

export interface MeetingSchedule {
    currentEmployee: Employee | null;
    currentMeetingRoom:MeetingRoom | null;
    currentMeetingTime:MeetingTime | null
    DatePart:string;
    
    
}
