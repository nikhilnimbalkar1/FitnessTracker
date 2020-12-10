import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAppointmentRoutingModule } from './view-appointment-routing.module';
import { ViewAppointmentComponent } from './view-appointment.component';


@NgModule({
  declarations: [ViewAppointmentComponent],
  imports: [
    CommonModule,
    ViewAppointmentRoutingModule
  ]
})
export class ViewAppointmentModule { }
