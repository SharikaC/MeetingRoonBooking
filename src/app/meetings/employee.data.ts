import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MeetingRoom } from './meeting.room';

import { Employee } from './employee';
import { MeetingTime } from './meeting.time';

export class EmployeeData implements InMemoryDbService {

    createDb() {
        const employees: Employee[] = [
            {
                id: 1,
                employeeName: 'Sharika',
                 
            },
            {
                id: 2,
                employeeName: 'Samjog',
                 
            },
            
            {
                id: 3,
                employeeName: 'Sidharth',
                
            },
            {
                id: 4,
                employeeName: 'Idhika',
                
            }
        ];

        
            const meetingRooms: MeetingRoom[] = [
                {
                    id: 1,
                    meetingRoomName: 'Room Gold',
                     
                },
                {
                    id: 2,
                    meetingRoomName: 'Room Bronze',
                },
                {
                    id: 3,
                    meetingRoomName: 'Room Diamond',
                }

                ,
                {
                    id: 4,
                    meetingRoomName: 'Room Silver',
                }
            
            
            ];

            const meetingTimes: MeetingTime[] = [
                {
                    id: 1,
                    timePart: '10:00 AM',
                    category:"Morning"
                     
                },
                {
                    id: 2,
                    timePart: '11:00 AM',
                    category:"Morning"
                },
                {
                    id: 3,
                    timePart: '12:00 PM',
                    category:"Morning"
                }
                ,
                {
                    id: 4,
                    timePart: '1:00 PM',
                    category:"Afternoon"
                }
                ,
                {
                    id: 5,
                    timePart: '2:00 PM',
                    category:"Afternoon"
                }
                ,
                {
                    id: 6,
                    timePart: '3:00 PM',
                    category:"Afternoon"
                }
                ,
                {
                    id: 7,
                    timePart: '4:00 PM',
                    category:"Afternoon"
                }
                ,
                {
                    id: 8,
                    timePart: '5:00 PM',
                    category:"Evening"
                }
                ,
                {
                    id: 9,
                    timePart: '6:00 PM',
                    category:"Evening"
                }
                ,
                {
                    id: 10,
                    timePart: '700 PM',
                    category:"Evening"
                }
                ,
                {
                    id: 11,
                    timePart: '8:00 PM',
                    category:"Evening"
                }
            ]
        return { employees ,meetingRooms,meetingTimes};
    }
}
