import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  id!: number
  userId!: number
  name!: string
  lastName!: string
  dni!: string
  email!: string
  cellphone!: string

  constructor(public app: AppComponent,
              private router: Router,
              private route: ActivatedRoute,
              private patientService: PatientService) {
    this.app.navbarAdmin = false;
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.userId = Number(this.route.snapshot.paramMap.get('userId'))
  }

  ngOnInit(): void {
  }

  changeName(e: Event) {
    this.name = (e.target as any).value;
  }

  changeLastName(e: Event) {
    this.lastName = (e.target as any).value;
  }

  changeDni(e: Event) {
    this.dni = (e.target as any).value;
  }

  changeEmail(e: Event) {
    this.email = (e.target as any).value;
  }

  changeCellphone(e: Event) {
    this.cellphone = (e.target as any).value;
  }

  save(): void {
    console.log(this.name)
    console.log(this.lastName)
    console.log(this.dni)
    console.log(this.email)
    console.log(this.cellphone)
    this.patientService.createPatient(
      new Patient(
        this.name, 
        this.lastName,
        this.dni,
        this.email, 
        this.cellphone))
        .subscribe((response: any) => {
      this.navigateToPatientsList()
    })
  }

  navigateToPatientsList(): void {
    this.router.navigate([`/user/${this.id}/patients-list`]).then(() => null);
  }
}
