import { Injectable } from "@angular/core";
import { PlaceAppointmentComponent } from './place-appointment.component';

@Injectable()
export class PlaceAppointmentService{
    appointments:{}[] = [];

    addAppointment(appointment:{}){
        this.appointments.push(appointment);
        localStorage.setItem('appointments',JSON.stringify(this.appointments));
    }

    getAppointments(){
        return this.appointments;
    }
}