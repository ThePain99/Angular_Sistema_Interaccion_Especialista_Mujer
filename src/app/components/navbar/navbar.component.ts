import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public app: AppComponent, private router: Router) {}
  ngOnInit(): void {
  }

  navigateToPatientsList(): void {
    this.router.navigate([`/patients-list`]).then(() => null);
  }

  navigateToUsersList(): void {
    this.router.navigate([`/users-list`]).then(() => null);
  }

  navigateToAccount(): void {
    this.router.navigate([`/account`]).then(() => null);
  }

  navigateToConsultsList(): void {
    this.router.navigate([`/history-consult`]).then(() => null);
  }

  navigateToConsults(): void {
    this.router.navigate([`/consults`]).then(() => null);
  }

  logOut(): void {
    this.router.navigate([`/login`]).then(() => null);
    localStorage.removeItem("userData")
  }
 }
