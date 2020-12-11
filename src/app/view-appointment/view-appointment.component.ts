import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  appointments:{
    age: number,
apartment: string,
bfname: "string,"
bill: number,
blname: string,
choice:string,
city: string,
country: string,
email: string,
fname: string,
gender: string,
lname: string,
package: string,
phono: string,
shipaddress: string,
state: string,
streetaddress: string,
zip: string,
  }[];
  filled = false;

  constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem('appointments')==null){
      this.filled = false;
    }
    else{
      this.filled=true;
      this.appointments = JSON.parse(localStorage.getItem('appointments'));
    }
   

  }

}
