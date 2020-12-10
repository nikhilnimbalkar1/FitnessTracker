import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './auth.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  registerForm:FormGroup;
  loginForm:FormGroup;
  isLoginMode = true;
  Mode = "Login"

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    const passPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$';
    this.registerForm = new FormGroup({
      'name' : new FormControl(null,Validators.required),
      'surname' : new FormControl(null,Validators.required),
      'address' : new FormControl(null,Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'contact' : new FormControl(null,Validators.required),
      'password' : new FormControl(null,[Validators.required]),
      'username' : new FormControl(null,Validators.required),

    });

    this.loginForm = new FormGroup({
      'username':new FormControl(null,Validators.required),
      'password':new FormControl(null,[Validators.required])
    })
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
    if(this.Mode == "Login"){
      this.Mode = "SignUp";
    }
    else{
      this.Mode = "Login";
    }
  }

  onLoginAsGuest(){
    this.authService.performLoginAsGuest();
  }

  onLogin(){

    if(this.loginForm.valid){
      const info = this.loginForm.value;
      this.authService.performLogin(info.username,info.password);
    }
    else{
      console.log('something');

    }

  }

  onSignUp(){

    if(this.registerForm.valid){

      const info = this.registerForm.value;

    
      const newUser = new User(info.name,info.surname,info.address,info.email,
        info.phono,info.username,info.password);

      this.authService.addUser(newUser);

      this.registerForm.reset();
      this.authService.performLogin(info.username,info.password);

    }

  }

}
