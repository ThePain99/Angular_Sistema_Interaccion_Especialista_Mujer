import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private app: AppComponent) {
    this.app.userLoggedIn = false;
  }

  ngOnInit(): void {

  }

  goToHome() {
    this.route.navigate(['consults'])
    this.app.userLoggedIn = true;
  }
}
