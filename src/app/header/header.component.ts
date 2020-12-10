import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.authService.loginStatus.subscribe((state =>{
      this.isLoggedIn = state;
    }))

  }

  logout(){
    this.authService.performLogout();
  }

}
