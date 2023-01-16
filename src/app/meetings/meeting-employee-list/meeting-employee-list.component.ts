import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

/* NgRx */
import { Store } from '@ngrx/store';
import { State,  getCurrentEmployee, getCurrentDate } from '../state/meeting.reducer';

import * as MeetingActions from '../state/meeting.actions';

@Component({
  selector: 'pm-meeting-employee-list',
  templateUrl: './meeting-employee-list.component.html',
  styleUrls: ['./meeting-employee-list.component.css']
})


export class MeetingEmployeeListComponent implements OnInit {

  pageTitle = 'Select an employee';
errorMessage: string;
employees: Employee[];
selectedDate: string;
// Used to highlight the selected employee in the list
selectedEmployee: Employee | null;

  constructor(private store: Store<State>, private employeeService: EmployeeService) { }
 

  ngOnInit(): void {

    // TODO: Unsubscribe

    this.store.select(getCurrentEmployee).subscribe(
      currentEmployee => this.selectedEmployee = currentEmployee
    );

    this.store.select(getCurrentDate).subscribe(
      currentDate => this.selectedDate = currentDate
    );
    
    this.employeeService.getEmployees().subscribe({
      next: (employees: Employee[]) => this.employees = employees,
      error: err => this.errorMessage = err
    });
  }

  employeeSelected(employee: Employee): void {
    this.store.dispatch(MeetingActions.setCurrentEmployee({ employee }));
  }

  saveSelectedDate():void{
    console.log(this.selectedDate)
    const selectedDate :string =this.selectedDate;
    this.store.dispatch(MeetingActions.setCurrentDate({ selectedDate }));
  }

}
