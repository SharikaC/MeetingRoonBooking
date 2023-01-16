import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeesUrl = 'api/employees';
  private employees: Employee[];

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    if (this.employees) {
      return of(this.employees);
    }
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.employees = data),
        catchError(this.handleError)
      );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Product Id must be null for the Web API to assign an Id
    const newEmployee = { ...employee, id: null };
    return this.http.post<Employee>(this.employeesUrl, newEmployee, { headers })
      .pipe(
        tap(data => console.log('createEmployee: ' + JSON.stringify(data))),
        tap(data => {
          this.employees.push(data);
        }),
        catchError(this.handleError)
      );
  }

  deleteEmployee(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.employeesUrl}/${id}`;
    return this.http.delete<Employee>(url, { headers })
      .pipe(
        tap(data => console.log('deleteEmployee: ' + id)),
        tap(data => {
          const foundIndex = this.employees.findIndex(item => item.id === id);
          if (foundIndex > -1) {
            this.employees.splice(foundIndex, 1);
          }
        }),
        catchError(this.handleError)
      );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.employeesUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee, { headers })
      .pipe(
        tap(() => console.log('updateEmployee: ' + employee.id)),
        // Update the item in the list
        // This is required because the selected product that was edited
        // was a copy of the item from the array.
        tap(() => {
          const foundIndex = this.employees.findIndex(item => item.id === employee.id);
          if (foundIndex > -1) {
            this.employees[foundIndex] = employee;
          }
        }),
        // Return the product on an update
        map(() => employee),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
