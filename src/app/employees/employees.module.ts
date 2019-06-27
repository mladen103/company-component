import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './components/employees/employees.component';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
