import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  constructor(public app: AppComponent, private router: Router) {
    this.app.navbarAdmin = false;
  }

  ngOnInit(): void {
  }

  navigateToPatientsList(): void {
    this.router.navigate([`/patients-list`]).then(() => null);
  }
  
}
