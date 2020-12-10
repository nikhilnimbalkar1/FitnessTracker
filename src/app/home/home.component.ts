import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trainerForm:FormGroup;
  fullname:string;
  constructor(private authservice:AuthService,private homeservice:HomeService) { }

  ngOnInit(): void {
    this.fullname = this.authservice.currentuser.name;
    this.trainerForm = new FormGroup({
      'fullname':new FormControl(null,Validators.required),
      'address':new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'phono':new FormControl(null,[Validators.required,Validators.minLength(10)])
    })

  }

  onApply(){

    const newApplication = this.trainerForm.value;

    this.homeservice.addTrainerApplication(newApplication);

    this.trainerForm.reset();
    
  }

}
