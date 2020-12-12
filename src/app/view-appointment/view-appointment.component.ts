import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  genders = ['male','female','none'];

  searchForm : FormGroup;

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

      this.appointments = JSON.parse(localStorage.getItem('appointments'));
      if(this.appointments.length==0){
        this.filled=false;
      }
      else{
        this.filled=true;
      } 
    }

    this.searchForm = new FormGroup({
      'gender' : new FormControl(null)
    })
   

  }




  onSearch(){
    const key = this.searchForm.value;
    this.appointments = this.appointments.filter(d=>d.gender === key.gender);
  
  }

  onClearSearch(){
    this.appointments = JSON.parse(localStorage.getItem('appointments'));
    this.searchForm.reset();
  }

}
