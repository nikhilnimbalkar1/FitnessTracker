import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullname:string;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.fullname = this.authservice.currentuser.name;
  }

}
