import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  constructor(public app: AppComponent, private router: Router) {
    this.app.navbarAdmin = false;
  }

  ngOnInit(): void {
  }

  navigateToPatientsList(): void {
    this.router.navigate([`/patients-list`]).then(() => null);
  }

}
