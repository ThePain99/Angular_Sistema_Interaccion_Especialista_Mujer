import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  constructor(private route: Router, private app: AppComponent) {
    this.app.userLoggedIn = false;
  }

  ngOnInit(): void {
  }

  goToHome() {
    this.route.navigate(['home'])
    this.app.userLoggedIn = true;
  }
}
