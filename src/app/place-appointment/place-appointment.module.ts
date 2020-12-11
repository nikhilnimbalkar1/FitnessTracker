import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceAppointmentRoutingModule } from './place-appointment-routing.module';
import { PlaceAppointmentComponent } from './place-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceAppointmentService } from './placeapp.service';


@NgModule({
  declarations: [PlaceAppointmentComponent],
  imports: [
    CommonModule,
    PlaceAppointmentRoutingModule,
    ReactiveFormsModule
  ],
  providers:[PlaceAppointmentService]
})
export class PlaceAppointmentModule { }
