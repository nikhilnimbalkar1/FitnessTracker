import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceAppointmentRoutingModule } from './place-appointment-routing.module';
import { PlaceAppointmentComponent } from './place-appointment.component';


@NgModule({
  declarations: [PlaceAppointmentComponent],
  imports: [
    CommonModule,
    PlaceAppointmentRoutingModule
  ]
})
export class PlaceAppointmentModule { }
