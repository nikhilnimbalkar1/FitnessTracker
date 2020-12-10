import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trainerForm:FormGroup;
  fullname:string;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.fullname = this.authservice.currentuser.name;
    this.trainerForm = new FormGroup({
      'fullname':new FormControl(null,Validators.required),
      'address':new FormControl(null,Validators.required),
      'email': new FormControl(null,Validators.required),
      'phono':new FormControl(null,Validators.required)
    })

  }

  onApply(){
    
  }

}
