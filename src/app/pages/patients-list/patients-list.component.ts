import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  constructor(public app: AppComponent, private router: Router) {
    this.app.navbarAdmin = false;
    this.app.empty = false;
  }

  ngOnInit(): void {
  }

  navigateToEditPatient(): void {
    this.router.navigate([`/edit-patient`]).then(() => null);
  }

  navigateToNewPatient(): void {
    this.router.navigate([`/new-patient`]).then(() => null);
  }

}
