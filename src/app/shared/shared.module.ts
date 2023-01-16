import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import { MatInputModule  } from '@angular/material/input';
import { MatNativeDateModule  } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table'  

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule 
  ]
})
export class SharedModule { }
