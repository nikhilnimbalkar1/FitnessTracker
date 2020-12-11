import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceAppointmentService } from './placeapp.service';

@Component({
  selector: 'app-place-appointment',
  templateUrl: './place-appointment.component.html',
  styleUrls: ['./place-appointment.component.css']
})
export class PlaceAppointmentComponent implements OnInit{

  genders=['male','female','none'];
  choices= ['yes','no'];

  placeAppointmentForm:FormGroup;

  constructor(private appointservice:PlaceAppointmentService) { }

  ngOnInit(): void {

    if(localStorage.getItem('appointments')==null){
      localStorage.setItem('appointments',JSON.stringify([]));
    }

    this.placeAppointmentForm = new FormGroup({
      'fname': new FormControl(null,[Validators.required,Validators.pattern('^([^0-9]*)$')]),
      'lname': new FormControl(null,[Validators.required,Validators.pattern('^([^0-9]*)$')]),
      'shipaddress': new FormControl(null,Validators.required),
      'streetaddress': new FormControl(null,Validators.required),
      'apartment': new FormControl(null,Validators.required),
      'city': new FormControl(null,Validators.required),
      'state': new FormControl(null,Validators.required),
      'zip': new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{6}$')]),
      'country': new FormControl(null,Validators.required),
      'bfname': new FormControl(null,[Validators.required,Validators.pattern('^([^0-9]*)$')]),
      'blname': new FormControl(null,[Validators.required,Validators.pattern('^([^0-9]*)$')]),
      'phono': new FormControl(null,[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]{10}$')]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'age': new FormControl(null,[Validators.required,Validators.min(18),Validators.max(60)]),
      'gender': new FormControl(null,Validators.required),
      'choice': new FormControl(null,Validators.required),
      'package': new FormControl(null,Validators.required),
      'otherpack': new FormControl({value:null,disabled:true},Validators.required),
      'bill': new FormControl({value:null,disabled:true},Validators.required)
    })

  }


  onChange(e){

    const appointment = this.placeAppointmentForm.value;
      const pack = appointment.package;

      switch(pack){
        case "One Time Assessment Only":
          this.placeAppointmentForm.patchValue({
            'bill':500
          })
          this.placeAppointmentForm.controls['otherpack'].disable();
          this.placeAppointmentForm.controls['bill'].enable();
          break;
        
        case "4 Sessions Per Week":
          this.placeAppointmentForm.patchValue({
                'bill':1600
              })
          this.placeAppointmentForm.controls['otherpack'].disable();
          this.placeAppointmentForm.controls['bill'].enable();
          break;
          
        case "5 Sessions Per Week":
          this.placeAppointmentForm.patchValue({
                  'bill':1500
                })
          this.placeAppointmentForm.controls['otherpack'].disable();
          this.placeAppointmentForm.controls['bill'].enable();
          break;

        case "Other":
          this.placeAppointmentForm.patchValue({
            'bill':2000
          })
          this.placeAppointmentForm.controls['otherpack'].enable();
          break;

        default:
          break;

  }
}

  onApply(){

    if(this.placeAppointmentForm.valid){
      const appointment = this.placeAppointmentForm.value;
      this.appointservice.addAppointment(appointment); 
    }

  }
}
