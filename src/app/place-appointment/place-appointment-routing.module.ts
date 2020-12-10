import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceAppointmentComponent } from './place-appointment.component';

const routes: Routes = [{ path: '', component: PlaceAppointmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceAppointmentRoutingModule { }
